import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Nav, Navbar} from "react-bootstrap";

const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/videos">Videos</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;