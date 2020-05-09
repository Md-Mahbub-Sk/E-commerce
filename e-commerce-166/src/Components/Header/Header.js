import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Navbar, Image, Nav } from 'react-bootstrap';
import logo from '../../Img/Screenshot_1-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import InformationMenu from '../InformationMenu/InformationMenu';
const Header = () => {
    return (
        <div className="">
            <div className="container">
                <div className="nav-bar-section ">

                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="/home">
                            <img src={logo}
                                width="80"
                                height="80"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="">
                            <Nav className="ml-auto">
                                <div className=" text-center iconBtn">
                                     <a href="/review"><FontAwesomeIcon icon={faCartPlus} /></a>
                                </div>
                            </Nav>
                            <Nav className="ml-auto">
                                <Nav.Link href="/signIn">Sign In</Nav.Link>
                                <Nav.Link href="/signUp">Sign Up</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <InformationMenu></InformationMenu>
            </div>


        </div>
    );
};

export default Header;