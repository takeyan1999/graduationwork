import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QuizMaker from "./QuizMaker";
import acount_img from "../images/acount.jpeg";

const QuizBody = () => {
    let QuestionCounter: number = 1;

    let MakerName: String = "Alice";

    return (
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
            <QuizMaker />
        </Container>
    );
};

export default QuizBody;
