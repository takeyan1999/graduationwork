import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import acount from "../images/acount.jpeg";
import { useNavigate } from "react-router-dom";

const QuizHeader = () => {
    const navigate = useNavigate();
    const Gohome = () => {
        navigate("/");
    };
    const Admin = () => {
        navigate("/Admin");
    };

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand onClick={Gohome}>みんなでクイズ合戦</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={Gohome}>Home</Nav.Link>
                            <Nav.Link onClick={Gohome}>theme</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Image src={acount} roundedCircle className="account-img" />
                        <NavDropdown title="" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={Admin}>問題管理画面</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">ログアウト</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default QuizHeader;
