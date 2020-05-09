import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-awesome-slider/dist/styles.css';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

import './InformationMenu.css';
import img1 from '../../Img/off1.1.png';
import img2 from '../../Img/off1.2.png';

import img4 from '../../Img/off4.png';
import img5 from '../../Img/off5.png';
import img6 from '../../Img/off-6.png';
import img8 from '../../Img/off-8.jpg';
import img9 from '../../Img/off-1.3.png';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

const InformationMenu = () => {

    return (

        <div className="information-wrap mb-5">
            <div className=" container information-wrap">

                <div className="sidebar-wrapper col-lg-3 col-md-12 col-sm-12">
                    <ul>
                        <li> <a href="/"> <img style={{ width: "20px", height: "20px" }} src="https://img.icons8.com/color/48/000000/home-page.png" alt="icon" /> shop <FontAwesomeIcon icon={faArrowAltCircleRight} /></a></li>
                        <li> <a href="/categories"> <img style={{ width: "20px", height: "20px" }} src="https://img.icons8.com/color/48/000000/categorize.png" alt="icon" /> Categories <FontAwesomeIcon icon={faArrowAltCircleRight} /></a></li>
                        <li><a href="/watch"><img style={{ width: "20px", height: "20px" }} src="https://img.icons8.com/color/48/000000/apple-watch-apps.png" alt="icon" />Watch <FontAwesomeIcon icon={faArrowAltCircleRight} /></a></li>
                        <li><a href="/bracelet"><img style={{ width: "20px", height: "20px" }} src="https://img.icons8.com/color/48/000000/hand-with-bracelet.png" alt="icon" /> Bracelet <FontAwesomeIcon icon={faArrowAltCircleRight} /> </a></li>
                        <li><a href="/bodySpray"><img style={{ width: "20px", height: "20px" }} src="https://img.icons8.com/color/48/000000/deodorant-spray.png" alt="icon" /> Body Spray <FontAwesomeIcon icon={faArrowAltCircleRight} /></a></li>
                        <li><a href="/Mobile"><img style={{ width: "20px", height: "20px" }} src="https://img.icons8.com/color/48/000000/android.png" alt="icon" /> Mobile <FontAwesomeIcon icon={faArrowAltCircleRight} /> </a></li>
                        <li><a href="/Others"><FontAwesomeIcon icon={faHandPeace} /> Others <FontAwesomeIcon icon={faArrowAltCircleRight} /></a></li>
                    </ul>
                </div>

                <div className="col-lg-8 col-md-12 col-sm-12 slider">
                    <Slider {...settings}>

                       
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img4} alt="" />
                            <img src={img5} alt="" />
                            <img src={img6} alt="" />
                            <img src={img8} alt="" />
                            

                    </Slider>

                </div>

            </div>

        </div>
    );
};

export default InformationMenu;