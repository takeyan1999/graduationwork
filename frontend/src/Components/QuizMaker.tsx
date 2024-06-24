import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import { Question } from "react-bootstrap-icons";

interface QuizList {
    id: number | null;
    Quiz: string;
    Choice1: string;
    Choice2: string;
    Choice3: string;
    Choice4: string;
    AnswerChoice: number | null;
}

type QuizBodyProps = {
    SetMaruBatuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    SetAnswer_Check: React.Dispatch<React.SetStateAction<boolean>>;
    QuizList: QuizList[];
    QuestionCounter: number;
    setCollectCount: React.Dispatch<React.SetStateAction<number>>;
    setWrongCount: React.Dispatch<React.SetStateAction<number>>;
};

const QuizMaker = (props: QuizBodyProps) => {
    let QuizList = props.QuizList;
    let QuestionCounter = props.QuestionCounter - 1;

    const MaruBatuShow = () => {
        props.SetMaruBatuOpen((MaruBatuOpen) => !MaruBatuOpen);
    };

    const AnswerCheck = (AnswerNumber: number) => {
        if (AnswerNumber === QuizList[QuestionCounter]["AnswerChoice"]) {
            props.SetAnswer_Check(true);
            props.setCollectCount((c) => c + 1);
        } else {
            props.SetAnswer_Check(false);
            props.setWrongCount((c) => c + 1);
        }
    };

    const handleClick = (answerNunmber: number) => {
        AnswerCheck(answerNunmber);
        MaruBatuShow();
    };

    // QuizBodyにNextQuestionに作る。
    // NextQuestion　きのう　QuesitonCount+1 次の問題を読み込み　問題数確認。
    // このあと、何秒か待って次の問題に映ることができるようにする機能をつける。

    return (
        <>
            <Container>
                <h1 className="Quiz_question text-left w-75 m-auto">{QuizList[QuestionCounter]["Quiz"]}</h1>
                <Row>
                    <Col className="d-grid">
                        <Button
                            className="Answer_button button_color1"
                            variant="light"
                            size="lg"
                            onClick={() => handleClick(1)}
                        >
                            {QuizList[QuestionCounter]["Choice1"]}
                        </Button>
                    </Col>
                    <Col className="d-grid">
                        <Button
                            className="Answer_button button_color2"
                            variant="light"
                            size="lg"
                            onClick={() => handleClick(2)}
                        >
                            {QuizList[QuestionCounter]["Choice2"]}
                        </Button>
                    </Col>
                </Row>
                <Row className="pt-5">
                    <Col className="d-grid">
                        <Button
                            className="Answer_button button_color3"
                            variant="light"
                            size="lg"
                            onClick={() => handleClick(3)}
                        >
                            {QuizList[QuestionCounter]["Choice3"]}
                        </Button>
                    </Col>
                    <Col className="d-grid">
                        <Button
                            className="Answer_button button_color4"
                            variant="light"
                            size="lg"
                            onClick={() => handleClick(4)}
                        >
                            {QuizList[QuestionCounter]["Choice4"]}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default QuizMaker;
