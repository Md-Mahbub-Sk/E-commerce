import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Badge, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus,faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart, setCart] = useState([]);
    console.log(cart)
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
    return (
        <div>
            <Container>
                <Cart cart={cart}></Cart>
                <h2 style={{ color: "#17a2b8", textAlign: "center" }}>Your Item {cart.length}</h2>
                <Col className="review-section" >
                    <div className=" icon-cart-btn cartBtn">
                        <FontAwesomeIcon icon={faCartPlus} />
                        <sup>
                            <Badge variant="primary">{cart.length}</Badge>
                        </sup>
                    </div>
                    <div className="row-md-12 review-detail">
                        <div className="col-md-6" >
                            <h3 style={{color:"#17a2b8"}}>Product Detail</h3>
                        </div>
                        <div className="col-md-2" >
                            <h3 style={{color:"#17a2b8"}}>Quantity</h3>
                        </div>
                        <div className="col-md-2" >
                           <h3 style={{color:"#17a2b8"}}> Price</h3>
                        </div>
                        <div className="col-md-2" >
                            <h3 style={{color:"#17a2b8"}}>Total</h3>
                        </div>
                    </div>
                    {
                        cart.map(pd => <ReviewItem
                            key={pd.key}
                            handleRemoveFromCart={handleRemoveFromCart}
                            product={pd}></ReviewItem>)
                    }
                </Col>
                <Link to="/">
                    <Button className="cart-btn m-3"

                        variant="outline-info"
                    >
                        <FontAwesomeIcon icon={faHome} /> Back to Home
                            </Button>
                </Link>
            </Container>
        </div>
    );
};

export default Review;