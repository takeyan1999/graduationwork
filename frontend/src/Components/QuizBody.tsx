import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QuizMaker from "./QuizMaker";
import acount_img from "../images/acount.jpeg";
import MaruBatu from "./MaruBatu";
// import Answer_results from "./Answer_result";

interface QuizList {
    id: number | null;
    Quiz: string;
    Choice1: string;
    Choice2: string;
    Choice3: string;
    Choice4: string;
    AnswerChoice: number | null;
}

type appProps = {
    QuizList: QuizList[];
    Answer_result: boolean;
    setAnswer_result: React.Dispatch<React.SetStateAction<boolean>>;
    setCollectCount: React.Dispatch<React.SetStateAction<number>>;
    setWrongCount: React.Dispatch<React.SetStateAction<number>>;
    CollectCount: number;
};

const QuizBody = (props: appProps) => {
    const [QuestionCounter, SetQuestionCounter] = useState<number>(1);
    const [MaruBatuOpen, SetMaruBatuOpen] = useState<boolean>(false);
    const [Answer_Check, SetAnswer_Check] = useState<boolean>(false);

    let MakerName: string = "Alice";

    const QuestionCount = () => {
        SetQuestionCounter((counter) => counter + 1);
    };
    const MaruBatuShow = () => {
        SetMaruBatuOpen((MaruBatuOpen) => !MaruBatuOpen);
    };

    const NextQuizHandleEvent = () => {
        MaruBatuShow();

        if (QuestionCounter >= props.QuizList.length) {
            QuestionCount();
            props.setAnswer_result((Answer_result) => !Answer_result);
        } else {
            QuestionCount();
        }
    };

    return (
        <>
            <Container className="body_container text-center">
                <Row>
                    <Col>timer</Col>
                    <Col xs={6}>{QuestionCounter} 問目</Col>
                    <Col className="maker_font">
                        <span>作成者</span> <br />
                        <img src={acount_img} alt="" className="account-img" /> <br />
                        <span>{MakerName}</span>
                    </Col>
                </Row>
                <QuizMaker
                    SetMaruBatuOpen={SetMaruBatuOpen}
                    SetAnswer_Check={SetAnswer_Check}
                    QuizList={props.QuizList}
                    QuestionCounter={QuestionCounter}
                    setCollectCount={props.setCollectCount}
                    setWrongCount={props.setWrongCount}
                />
            </Container>
            {MaruBatuOpen && <MaruBatu Answer_Check={Answer_Check} />}
            {MaruBatuOpen &&
                (props.Answer_result ? (
                    <Button
                        className="mt-5 start-50 translate-middle z-2 position-absolute Next_button"
                        variant="primary"
                        size="lg"
                        onClick={NextQuizHandleEvent}
                    >
                        結果発表
                    </Button>
                ) : (
                    <Button
                        className="mt-5 start-50 translate-middle z-2 position-absolute Next_button"
                        variant="primary"
                        size="lg"
                        onClick={NextQuizHandleEvent}
                    >
                        次の問題
                    </Button>
                ))}
        </>
    );
};

export default QuizBody;
