import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type Answer_resultProps = {
    CollectCount: number;
    WrongCount: number;
};

const Answer_results = (props: Answer_resultProps) => {
    console.log(props.CollectCount);
    console.log(props.WrongCount);

    return (
        <>
            <Container className="body_container text-center">
                <Row>
                    <Col>結果発表</Col>
                </Row>

                <h1 className="Quiz_question Quiz_result">{props.CollectCount} 問正解！！！</h1>
                <h1 className="Quiz_question text-right">全{props.CollectCount + props.WrongCount}問中</h1>
            </Container>
        </>
    );
};

export default Answer_results;
