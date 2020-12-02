import React from 'react';
import { Navbar, Nav} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const HeaderComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to='/'>
                <Navbar.Brand>AtCoder Bingo</Navbar.Brand>
            </LinkContainer>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/bingo">
                        <Nav.Link href="#home">順位表ビンゴ</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/comp-usi-w">
                        <Nav.Link href="#link">競技うしたぷにきあくん笑</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};