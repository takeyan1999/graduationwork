import React from "react";
import Container from "react-bootstrap/Container";

const home = () => {
    return (
        <Container className="pt-5 home_container d-flex justify-content-center gap-5">
            <a type="button" href="/quiz" className="home_choice1 position-relative link-dark">
                <div className="position-absolute top-50 start-50 translate-middle">問題を解く</div>
            </a>
            <a type="button" href="/make" className="home_choice2 position-relative">
                <div className="position-absolute top-50 start-50 translate-middle link-dark">問題を作る</div>
            </a>
        </Container>
    );
};

export default home;
