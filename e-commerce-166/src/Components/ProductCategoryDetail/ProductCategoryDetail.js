import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductCategoryDetail.css';
const ProductCategoryDetail = (props) => {
    const { img, name, stock,link } = props.item;
    return (
        <div>
            <div className="container  categoryDetail" >
                <Col className=" categoryDetail-item">
                   
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={img} alt="hi" />
                            <h5>{name}</h5>
                        </div>
                        <a className="text-center d-block text-dark btn  mt-5" href={link}>click here</a>
                    
                </Col>
            </div>
        </div>
    );
};

export default ProductCategoryDetail;