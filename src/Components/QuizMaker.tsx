import React, { SetStateAction } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import MaruBatu from "./MaruBatu";

type QuizBodyProps = {
    QuestionCounter: React.Dispatch<SetStateAction<number>>;
};

const QuizMaker = (props: QuizBodyProps) => {
    const [Answer_Check, SetAnswer_Check] = useState<Boolean>(false);
    const [MaruBatuOpen, SetMaruBatuOpen] = useState<Boolean>(false);

    const QuestionCount = () => {
        props.QuestionCounter((counter) => counter + 1);
    };

    const MaruBatuShow = () => {
        SetMaruBatuOpen((MaruBatuOpen) => !MaruBatuOpen);
    };

    const handleClick = (answerNunmber: number) => {
        console.log(answerNunmber);
        SetAnswer_Check(true);
        MaruBatuShow();
        setTimeout(MaruBatuShow, 2000);
        QuestionCount();
    };

    // このあと、何秒か待って次の問題に映ることができるようにする機能をつける。

    return (
        <>
            <h1 className="p-5">ここに問題が入ります。</h1>
            <Container className="p-5">
                <Row>
                    <Col className="d-grid">
                        <Button
                            className="Answer_button button_color1"
                            variant="light"
                            size="lg"
                            onClick={() => handleClick(1)}
                        >
                            選択肢１
                        </Button>
                    </Col>
                    <Col className="d-grid">
                        <Button
                            className="Answer_button button_color2"
                            variant="light"
                            size="lg"
                            onClick={() => handleClick(2)}
                        >
                            選択肢２
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
                            選択肢３
                        </Button>
                    </Col>
                    <Col className="d-grid">
                        <Button
                            className="Answer_button button_color4"
                            variant="light"
                            size="lg"
                            onClick={() => handleClick(4)}
                        >
                            選択肢４
                        </Button>
                    </Col>
                </Row>
            </Container>
            {MaruBatuOpen && <MaruBatu Answer_Check={Answer_Check} />}
        </>
    );
};

export default QuizMaker;
