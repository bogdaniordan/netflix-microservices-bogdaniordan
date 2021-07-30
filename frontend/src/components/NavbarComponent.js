import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Nav, Navbar} from "react-bootstrap";

const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/videos">Videos</Navbar.Brand>
                    {/*<Nav className="me-auto">*/}
                    {/*    <Nav.Link href="#home">Home</Nav.Link>*/}
                    {/*    <Nav.Link href="#features">Features</Nav.Link>*/}
                    {/*    <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                    {/*</Nav>*/}

                    {/*<Navbar.Brand href="#home">Navbar</Navbar.Brand>*/}

                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;