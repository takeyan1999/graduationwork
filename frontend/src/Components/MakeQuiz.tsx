import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

type makeProps = {
    addQuiz: (
        Quiz: string,
        Choice1: string,
        Choice2: string,
        Choice3: string,
        Choice4: string,
        AnswerChoice: number
    ) => void;
};

const MakeQuiz = (props: makeProps) => {
    const [QuizText, setQuizText] = useState<string | null>();
    const [QuizChoice1, setChoice1] = useState<string | null>();
    const [QuizChoice2, setChoice2] = useState<string | null>();
    const [QuizChoice3, setChoice3] = useState<string | null>();
    const [QuizChoice4, setChoice4] = useState<string | null>();
    const [Answer, setAnswer] = useState<number | null>();
    const [isQuizText, setIsQuizText] = useState<boolean>(false);
    const [isQuizChoice1, setIsQuizChoice1] = useState<boolean>(false);
    const [isQuizChoice2, setIsQuizChoice2] = useState<boolean>(false);
    const [isQuizChoice3, setIsQuizChoice3] = useState<boolean>(false);
    const [isQuizChoice4, setIsQuizChoice4] = useState<boolean>(false);
    const [isAnswer, setIsAnswer] = useState<boolean>(false);

    const makeQuizHandleEvent = () => {
        setIsQuizText(false);
        setIsQuizChoice1(false);
        setIsQuizChoice2(false);
        setIsQuizChoice3(false);
        setIsQuizChoice4(false);
        setIsAnswer(false);

        if (!QuizText) {
            setIsQuizText(true);
        }
        if (!QuizChoice1) {
            setIsQuizChoice1(true);
        }
        if (!QuizChoice2) {
            setIsQuizChoice2(true);
        }
        if (!QuizChoice3) {
            setIsQuizChoice3(true);
        }
        if (!QuizChoice4) {
            setIsQuizChoice4(true);
        }
        if (!Answer) {
            setIsAnswer(true);
        }
        if (!QuizText) {
            setIsQuizText(true);
        } else if (!QuizChoice1) {
            setIsQuizChoice1(true);
        } else if (!QuizChoice2) {
            setIsQuizChoice2(true);
        } else if (!QuizChoice3) {
            setIsQuizChoice3(true);
        } else if (!QuizChoice4) {
            setIsQuizChoice4(true);
        } else if (!Answer) {
            setIsAnswer(true);
        } else {
            props.addQuiz(QuizText, QuizChoice1, QuizChoice2, QuizChoice3, QuizChoice4, Answer);
        }
    };

    return (
        <>
            <Container className="">
                <Form.Group className="Quiz_question mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="fs-3">問題を記入してください</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="記入例）4+2="
                        onChange={(e) => setQuizText(e.target.value)}
                    />
                    <span className="text-danger" style={{ visibility: isQuizText ? "visible" : "hidden" }}>
                        正しく記入されていません
                    </span>
                </Form.Group>
                <Row className="mt-3">
                    <div className="mt-5 mb-3 d-flex">
                        <h1 className="fs-3">正解の選択肢にチェックを入れましょう</h1>
                        <span className="text-danger" style={{ visibility: isAnswer ? "visible" : "hidden" }}>
                            答えにチェックが入っていません。
                        </span>
                    </div>
                    <Col className="d-grid">
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                                <Form.Check name="group1" type="radio" id="1" label="1" onChange={() => setAnswer(1)} />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="選択肢１"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setChoice1(e.target.value)}
                            />
                        </InputGroup>
                        <span className="text-danger" style={{ visibility: isQuizChoice1 ? "visible" : "hidden" }}>
                            正しく記入されていません
                        </span>
                    </Col>
                    <Col className="d-grid">
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon2">
                                <Form.Check name="group1" type="radio" id="2" label="2" onChange={() => setAnswer(2)} />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="選択肢２"
                                aria-label="Username"
                                aria-describedby="basic-addon2"
                                onChange={(e) => setChoice2(e.target.value)}
                            />
                        </InputGroup>
                        <span className="text-danger" style={{ visibility: isQuizChoice2 ? "visible" : "hidden" }}>
                            正しく記入されていません
                        </span>
                    </Col>
                </Row>
                <Row className="pt-5">
                    <Col className="d-grid">
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                                <Form.Check name="group1" type="radio" id="3" label="3" onChange={() => setAnswer(3)} />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="選択肢３"
                                aria-label="Username"
                                aria-describedby="basic-addon3"
                                onChange={(e) => setChoice3(e.target.value)}
                            />
                        </InputGroup>
                        <span className="text-danger" style={{ visibility: isQuizChoice3 ? "visible" : "hidden" }}>
                            正しく記入されていません
                        </span>
                    </Col>
                    <Col className="d-grid">
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon4">
                                <Form.Check name="group1" type="radio" id="4" label="4" onChange={() => setAnswer(4)} />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="選択肢４"
                                aria-label="Username"
                                aria-describedby="basic-addon4"
                                onChange={(e) => setChoice4(e.target.value)}
                            />
                        </InputGroup>
                        <span className="text-danger" style={{ visibility: isQuizChoice4 ? "visible" : "hidden" }}>
                            正しく記入されていません
                        </span>
                    </Col>
                </Row>
            </Container>
            <Button
                className="mt-5 start-50 translate-middle z-2 position-absolute Next_button"
                variant="primary"
                size="lg"
                onClick={makeQuizHandleEvent}
            >
                問題を作る
            </Button>
        </>
    );
};

export default MakeQuiz;
