import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QuizMaker from "./QuizMaker";
import acount_img from "../images/acount.jpeg";
import MaruBatu from "./MaruBatu";

const QuizBody = () => {
    const [QuestionCounter, SetQuestionCounter] = useState<number>(1);
    const [MaruBatuOpen, SetMaruBatuOpen] = useState<Boolean>(false);
    const [Answer_Check, SetAnswer_Check] = useState<Boolean>(false);
    let MakerName: string = "Alice";

    const QuestionCount = () => {
        SetQuestionCounter((counter) => counter + 1);
    };
    const MaruBatuShow = () => {
        SetMaruBatuOpen((MaruBatuOpen) => !MaruBatuOpen);
    };
    const NextQuizHandleEvent = () => {
        MaruBatuShow();
        if (QuestionCounter >= 10) {
            console.log("finnish!");
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
                <QuizMaker SetMaruBatuOpen={SetMaruBatuOpen} SetAnswer_Check={SetAnswer_Check} />
            </Container>
            {MaruBatuOpen && <MaruBatu Answer_Check={Answer_Check} />}
            <Button
                className="mt-5 start-50 translate-middle z-2 position-absolute Next_button"
                variant="primary"
                size="lg"
                onClick={NextQuizHandleEvent}
            >
                次の問題
            </Button>
        </>
    );
};

export default QuizBody;
