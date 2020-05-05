import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Magnifier from "react-magnifier";
import './Products.css'
import Cart from '../Cart/Cart';
const Products = (props) => {
    const { img, category, stock, price, seller, name, key } = props.product;




    return (
        <div>
            {props.showAddToCart ?
                <div className="m-3">
                    <Container>

                        <Card className=" p-3  card" >
                            <Card.Img variant="top" src={img} Rounded />
                            <Card.Body className="mb-3">
                                <Card.Title>{category}</Card.Title>
                                <Card.Text>

                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={"bottom"}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                <p className="tooltip-text"><span>product name: </span>{name}</p>.
                                                    </Tooltip>
                                        }
                                    >
                                        <p className="productName text-justify">{name}</p>
                                    </OverlayTrigger>
                                    <h4>only <span style={{color:"red",fontWeight:"bold"}}>{stock}</span> pcs is left in stock</h4>
                                    <h4>price: <span className="price-bottom">$ {price} </span></h4>
                                    <h5>seller: {seller} Brand</h5>
                                </Card.Text>

                            </Card.Body>
                            <Card.Footer className="text-center card-btn">
                                <Link to={"/product/" + key}>
                                    <Button className="button"
                                        variant="outline-info"
                                    >
                                        <FontAwesomeIcon icon={faInfoCircle} /> Product Detail
                                    </Button>
                                </Link>
                                <Button className="cart-btn mt-2"
                                    onClick={() => props.handleAddProduct(props.product)}
                                    variant="outline-info"
                                >
                                    <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Container>
                </div>
                :
                /**this item is product detail's item */

                <div className="container detail-section">
                    <div className="detail-img col-md-4">
                        <Magnifier className="" src={img} />
                    </div>
                    <div className="col-md-4">
                        <p><span className="title-txt">Model: </span> {name}</p>
                        <h3><span className="title-txt">price: </span>${price}</h3>
                        <h3><span className="title-txt">Brand:</span> {seller}</h3>
                        <Link to="/">
                            <Button className="cart-btn mt-5"

                                variant="outline-info"
                            >
                                <FontAwesomeIcon icon={faHome} /> Back to Home
                            </Button>
                        </Link>
                    </div>


                </div>
            }
        </div >
    );
};

export default Products;