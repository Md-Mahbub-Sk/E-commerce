import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Navbar, Image, Button,Badge } from 'react-bootstrap';
import logo from '../../Img/Screenshot_1-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import InformationMenu from '../InformationMenu/InformationMenu';
const Header = () => {
    return (
        <div className="">
            <div className="nav-bar-section">
                <Navbar className="container" collapseOnSelect expand="lg" bg="white" >
                    <Navbar.Brand href="/">
                        <Image
                            src={logo}
                            height="80px"
                        />
                    </Navbar.Brand>

                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <div className="ml-auto">
                            <a href="/review" className="iconBtn">
                                <FontAwesomeIcon icon={faCartPlus} />
                                <sup>
                                    <Badge variant="primary">{0}</Badge>
                                </sup>
                            </a>
                        </div>

                    </Navbar.Collapse>
                </Navbar>
            </div>
            <InformationMenu></InformationMenu>
        </div>
    );
};

export default Header;