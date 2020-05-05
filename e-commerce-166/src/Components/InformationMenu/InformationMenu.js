import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHandPeace,faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

import './InformationMenu.css';


const InformationMenu = () => {

    return (
        <div>
            <div className=" container">
                <Nav>
                    <div className="sidebar-wrapper">
                        <ul>
                            <li> <a href="/"> <img style={{width:"20px",height:"20px"}} src="https://img.icons8.com/color/48/000000/home-page.png" alt="icon"/> Home <FontAwesomeIcon icon={faArrowAltCircleRight}/></a></li>
                            <li> <a href="/categories"> <img style={{width:"20px",height:"20px"}} src="https://img.icons8.com/color/48/000000/categorize.png" alt="icon"/> Categories <FontAwesomeIcon icon={faArrowAltCircleRight}/></a></li>
                            <li><a href="/watch"><img style={{width:"20px",height:"20px"}} src="https://img.icons8.com/color/48/000000/apple-watch-apps.png" alt="icon"/>Watch <FontAwesomeIcon icon={faArrowAltCircleRight}/></a></li>
                            <li><a href="/bracelet"><img style={{width:"20px",height:"20px"}} src="https://img.icons8.com/color/48/000000/hand-with-bracelet.png" alt="icon"/> Bracelet <FontAwesomeIcon icon={faArrowAltCircleRight}/> </a></li>
                            <li><a href="/bodySpray"><img style={{width:"20px",height:"20px"}} src="https://img.icons8.com/color/48/000000/deodorant-spray.png" alt="icon"/> Body Spray <FontAwesomeIcon icon={faArrowAltCircleRight}/></a></li>
                            <li><a href="/Mobile"><img style={{width:"20px",height:"20px"}} src="https://img.icons8.com/color/48/000000/android.png" alt="icon"/> Mobile <FontAwesomeIcon icon={faArrowAltCircleRight}/> </a></li>
                            <li><a href="/Others"><FontAwesomeIcon icon={faHandPeace} /> Others <FontAwesomeIcon icon={faArrowAltCircleRight}/></a></li>
                        </ul>
                    </div>
                </Nav>

            </div>

        </div>
    );
};

export default InformationMenu;