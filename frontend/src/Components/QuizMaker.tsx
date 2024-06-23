import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
    SetMaruBatuOpen: React.Dispatch<React.SetStateAction<Boolean>>;
    SetAnswer_Check: React.Dispatch<React.SetStateAction<Boolean>>;
    QuizList: QuizList[];
};

const QuizMaker = (props: QuizBodyProps) => {
    let QuizList = props.QuizList;
    console.log(QuizList);

    const MaruBatuShow = () => {
        props.SetMaruBatuOpen((MaruBatuOpen) => !MaruBatuOpen);
    };

    let CollectCount = 0;
    let WrongCount = 0;

    const AnswerCheck = (AnswerNumber: number) => {
        if (AnswerNumber === QuizList["AnswerChoice"]) {
            props.SetAnswer_Check(true);
            CollectCount += 1;
        } else {
            props.SetAnswer_Check(false);
            WrongCount += 1;
        }
    };

    const handleClick = (answerNunmber: number) => {
        AnswerCheck(answerNunmber);
        MaruBatuShow();

        console.log(CollectCount);
        console.log(WrongCount);
    };

    // QuizBodyにNextQuestionに作る。
    // NextQuestion　きのう　QuesitonCount+1 次の問題を読み込み　問題数確認。
    // このあと、何秒か待って次の問題に映ることができるようにする機能をつける。

    return (
        <>
            <Container>
                <h1 className="Quiz_question text-left w-75 m-auto">{QuizList["Quiz"]}</h1>
                <Row>
                    <Col className="d-grid">
                        <Button
                            className="Answer_button button_color1"
                            variant="light"
                            size="lg"
                            onClick={() => handleClick(1)}
                        >
                            {QuizList["Choice1"]}
                        </Button>
                    </Col>
                    <Col className="d-grid">
                        <Button
                            className="Answer_button button_color2"
                            variant="light"
                            size="lg"
                            onClick={() => handleClick(2)}
                        >
                            {QuizList["Choice2"]}
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
                            {QuizList["Choice3"]}
                        </Button>
                    </Col>
                    <Col className="d-grid">
                        <Button
                            className="Answer_button button_color4"
                            variant="light"
                            size="lg"
                            onClick={() => handleClick(4)}
                        >
                            {QuizList["Choice4"]}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default QuizMaker;
