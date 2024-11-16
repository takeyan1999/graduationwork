import React from "react";
import Container from "react-bootstrap/Container";

import { useNavigate } from "react-router-dom";

const home = () => {
    const navigate = useNavigate();

    const QuizHandleEvent = () => {
        navigate("/quiz");
    };
    const QuizMakeEvent = () => {
        navigate("/make");
    };

    return (
        <Container className="pt-5 home_container d-flex justify-content-center gap-5">
            <button className="home_choice1 position-relative" onClick={QuizHandleEvent}>
                <span className="position-absolute top-50 start-50 translate-middle">問題を解く</span>
            </button>
            <button className="home_choice2 position-relative" onClick={QuizMakeEvent}>
                <span className="position-absolute top-50 start-50 translate-middle">問題を作る</span>
            </button>
        </Container>
    );
};

export default home;
