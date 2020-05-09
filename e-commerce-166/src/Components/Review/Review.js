import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Badge, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'
import Cart from '../Cart/Cart';

const Review = (props) => {

    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const handleRemoveFromCart = (productKey) => {
        console.log("remove product", productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];


            return product;
        });
        setCart(cartProducts)
    }, [])
    const handlePlaceOrder = () => {
        setCart([])
        setOrderPlaced(true)
        processOrder()
    }
    return (
        <div>
            <Container className="review-wrap">
                <Cart cart={cart}>
                    <h1 style={{ textTransform: "capitalize" }}>click home for going to shop</h1>

                    <Link to="/">
                        <div className=" arrow-icon" >
                            <span>
                                <img src="https://img.icons8.com/color/48/000000/double-down.png" alt="icon" />
                            </span>
                        </div>
                        <img src="https://img.icons8.com/color/96/000000/home-page.png" />
                    </Link>
                </Cart>


                <h2 style={{ color: "#17a2b8", textAlign: "center" }}>Your Item {cart.length}</h2>
                <Col className="review-section" >
                    <div className=" icon-cart-btn cartBtn">
                        <FontAwesomeIcon icon={faCartPlus} />
                        <sup>
                            <Badge variant="primary">{cart.length}</Badge>
                        </sup>
                    </div>
                    <div className="row-md-12 review-detail">
                        <div className="col-md-6 review-menu" >
                            <h3 className="" style={{ color: "#17a2b8" }}>Product Detail</h3>
                        </div>
                        <div className="col-md-2 review-menu" >
                            <h3 className="" style={{ color: "#17a2b8" }}>Quantity</h3>
                        </div>
                        <div className="col-md-2 review-menu" >
                            <h3 className="" style={{ color: "#17a2b8" }}> Price</h3>
                        </div>
                        <div className="col-md-2 review-menu" >
                            <h3 className="" style={{ color: "#17a2b8" }}>Total</h3>
                        </div>
                    </div>
                    {
                        cart.map(pd => <ReviewItem
                            key={pd.key}
                            handleRemoveFromCart={handleRemoveFromCart}
                            product={pd}></ReviewItem>)
                    }
                </Col>
                <div className="cart-btn-wrap">
                    {
                        orderPlaced ? <Link to="/"><Button className="cart-btn  text-center"
                            onClick={handlePlaceOrder}
                            variant="outline-info"
                        >
                            <img src="https://img.icons8.com/color/48/000000/shopping-basket.png" alt="icon" /><p>Back To shop</p>
                        </Button></Link> :

                            <Button className="cart-btn  text-center"
                                onClick={handlePlaceOrder}
                                variant="outline-info"
                            >
                                <img src="https://img.icons8.com/color/48/000000/shopping-basket.png" alt="icon" /><p>Place Order</p>
                            </Button>

                    }


                </div>
            </Container>
        </div>
    );
};

export default Review;