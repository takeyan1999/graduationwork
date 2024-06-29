import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
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
    const [show, setShow] = useState(false);

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
            setShow(true);
        }
    };

    const handleClose = () => {
        setQuizText("");
        setChoice1("");
        setChoice2("");
        setChoice3("");
        setChoice4("");
        setAnswer(null);
        setShow(false);
    };

    return (
        <>
            <Container className="">
                <Form.Group className="Quiz_question mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="fs-3">問題を記入してください</Form.Label>
                    {QuizText !== null && (
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="記入例）4+2="
                            value={QuizText}
                            onChange={(e) => setQuizText(e.target.value)}
                        />
                    )}

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
                            {QuizChoice1 !== null && (
                                <Form.Control
                                    placeholder="選択肢１"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={QuizChoice1}
                                    onChange={(e) => setChoice1(e.target.value)}
                                />
                            )}
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
                            {QuizChoice2 !== null && (
                                <Form.Control
                                    placeholder="選択肢２"
                                    aria-label="Username"
                                    aria-describedby="basic-addon2"
                                    value={QuizChoice2}
                                    onChange={(e) => setChoice2(e.target.value)}
                                />
                            )}
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
                            {QuizChoice3 !== null && (
                                <Form.Control
                                    placeholder="選択肢３"
                                    aria-label="Username"
                                    aria-describedby="basic-addon3"
                                    value={QuizChoice3}
                                    onChange={(e) => setChoice3(e.target.value)}
                                />
                            )}
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
                            {QuizChoice4 !== null && (
                                <Form.Control
                                    placeholder="選択肢４"
                                    aria-label="Username"
                                    aria-describedby="basic-addon4"
                                    value={QuizChoice4}
                                    onChange={(e) => setChoice4(e.target.value)}
                                />
                            )}
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

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>問題を作りました！</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        OK!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default MakeQuiz;
