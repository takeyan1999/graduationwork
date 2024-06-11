import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const QuizMaker = () => {
    return (
        <>
            <h1 className="p-5">ここに問題が入ります。</h1>
            <Container className="p-5">
                <Row>
                    <Col className="d-grid">
                        <Button className="Answer_button button_color1" variant="light" size="lg">
                            選択肢１
                        </Button>
                    </Col>
                    <Col className="d-grid">
                        <Button className="Answer_button button_color2" variant="light" size="lg">
                            選択肢２
                        </Button>
                    </Col>
                </Row>
                <Row className="pt-5">
                    <Col className="d-grid">
                        <Button className="Answer_button button_color3" variant="light" size="lg">
                            選択肢３
                        </Button>
                    </Col>
                    <Col className="d-grid">
                        <Button className="Answer_button button_color4" variant="light" size="lg">
                            選択肢４
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default QuizMaker;
