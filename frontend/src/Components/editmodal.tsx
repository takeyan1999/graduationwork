import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

interface QuizList {
    id: number | null;
    Quiz: string;
    Choice1: string;
    Choice2: string;
    Choice3: string;
    Choice4: string;
    AnswerChoice: number | null;
}

type adminProps = {
    show: boolean;
    handleClose: () => void;
    editList: QuizList;
    Quizid: number;
    deleteEv: () => void;
    editEvent: (
        id: number | null,
        Quiz: string,
        Choice1: string,
        Choice2: string,
        Choice3: string,
        Choice4: string,
        AnswerChoice: number
    ) => void;
};

const Editmodal = (props: adminProps) => {
    const [QuizText, setQuizText] = useState<string | null>(props.editList.Quiz);
    const [QuizChoice1, setChoice1] = useState<string | null>(props.editList.Choice1);
    const [QuizChoice2, setChoice2] = useState<string | null>(props.editList.Choice2);
    const [QuizChoice3, setChoice3] = useState<string | null>(props.editList.Choice3);
    const [QuizChoice4, setChoice4] = useState<string | null>(props.editList.Choice4);
    const [Answer, setAnswer] = useState<number | null>(props.editList.AnswerChoice);

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
        } else if (!QuizChoice1) {
        } else if (!QuizChoice2) {
        } else if (!QuizChoice3) {
        } else if (!QuizChoice4) {
        } else if (!Answer) {
        } else {
            props.editEvent(props.Quizid, QuizText, QuizChoice1, QuizChoice2, QuizChoice3, QuizChoice4, Answer);
            props.handleClose();
        }
    };

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>この問題を編集してください</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="1"
                                        label="1"
                                        onChange={() => setAnswer(1)}
                                    />
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
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="2"
                                        label="2"
                                        onChange={() => setAnswer(2)}
                                    />
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
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="3"
                                        label="3"
                                        onChange={() => setAnswer(3)}
                                    />
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
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="4"
                                        label="4"
                                        onChange={() => setAnswer(4)}
                                    />
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        キャンセル
                    </Button>
                    <Button variant="primary" onClick={makeQuizHandleEvent}>
                        編集
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Editmodal;
