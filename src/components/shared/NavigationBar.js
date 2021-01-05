import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
    
    return(
        <div className="position-relative">
            <Navbar
                className="py-3"
                expand="false">
                <div className="w-100 d-flex flex-row-reverse" id="toggler">
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Nav className="justify-content-around">
                            <Nav.Item className="px-3">
                                <Nav.Link
                                    as={Link}
                                    to="/"
                                    >
                                    Home
                                </Nav.Link>
                            </Nav.Item>
                            <Navbar.Brand>
                                <img src={require("../../assets/lexi_logo.png")} width="52" height="52" alt="nav icon" />
                            </Navbar.Brand>
                            <Nav.Item className="px-3">
                                <Nav.Link
                                    as={Link}
                                    to="/aboutus"
                                    >
                                    About Us
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>            
        </div>
    );
}

export default NavigationBar;