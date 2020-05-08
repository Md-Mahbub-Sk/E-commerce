import React, { useState, useEffect } from 'react';
import './Shop.css'
import fakeData from '../../fakeData';
import Products from '../Products/Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Row, Container, Col, OverlayTrigger, Tooltip, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {


    const product80 = fakeData.slice(0, 80);
    const [products, setProducts] = useState(product80);

    const [cart, setCart] = useState([])

    useEffect((key) => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const findProduct = productKeys.map(pdKey => {
            const product = fakeData.find(pd => pd.key === pdKey)
            product.quantity = savedCart[pdKey]
            return product;
        })
        setCart(findProduct)
    }, [])

    const handleAddProduct = (product) => {
        const addedKey = product.key
        const sameProduct = cart.find(pd => pd.key === addedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;

            sameProduct.quantity = count;

            const others = cart.filter(pd => pd.key !== addedKey);
            newCart = [...others, sameProduct];


        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);


        addToDatabaseCart(product.key, count);
    }

    return (
        <div>

            <div className="product-container">

                <Container >

                    <Row>

                        <Col className="d-flex align-items-center cart-section justify-content-center">
                            <Cart cart={cart} >
                                <img src="https://img.icons8.com/color/144/000000/super-mario.png" alt="icon" />
                                <h1>Put your product..</h1>
                                <div className=" arrow-icon" >
                                    <span>
                                        <img src="https://img.icons8.com/color/48/000000/double-down.png" alt="icon" />
                                    </span>
                                </div>
                                <a href="/review" className="icon-cart-btn">
                                    <OverlayTrigger
                                        key={"left"}
                                        placement={"left"}
                                        overlay={
                                            <Tooltip id={`tooltip-${"left"}`}>
                                                <p style={{ fontSize: "20px" }}><strong>CLick for going to order review</strong></p>
                                            </Tooltip>
                                        }
                                    >
                                        <div>
                                            <FontAwesomeIcon icon={faCartPlus} />
                                            <sup>
                                                <Badge variant="primary">{cart.length}</Badge>
                                            </sup>
                                        </div>
                                    </OverlayTrigger>

                                </a>
                            </Cart>
                        </Col>
                        {
                            products.map(product => <Products
                                key={product.key}
                                showAddToCart={true}
                                handleAddProduct={handleAddProduct}
                                product={product}
                                cart={cart}
                            ></Products>)
                        }

                    </Row>
                    <Row>

                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default Shop;