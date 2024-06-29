import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import acount from "../images/acount.jpeg";

const QuizHeader = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/home">みんなでクイズ合戦</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/">theme</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Image src={acount} roundedCircle className="account-img" />
                        <NavDropdown title="" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/admin">問題管理画面</NavDropdown.Item>
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
