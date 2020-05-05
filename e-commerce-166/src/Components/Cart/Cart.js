import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, pd) => total + pd.price, 0);
    // const total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = total + product;
    // }


    return (
        <div className="cart-section">
            <img  src="https://img.icons8.com/color/144/000000/super-mario.png" alt="icon"/>
            <h1>Put your product..</h1>
            <div className=" arrow-icon" >
                <span>
                    <FontAwesomeIcon icon={faArrowDown} />
                </span>
            </div>
            <a href="/review" className="icon-cart-btn">
                <OverlayTrigger
                    key={"top"}
                    placement={"top"}
                    overlay={
                        <Tooltip id={`tooltip-${"top"}`}>
                            <p style={{ fontSize: "20px" }}><strong>CLick to going to order review</strong></p>.
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
            <h4>order-summary: {}</h4>
            <h3>total price:${totalPrice}</h3>

        </div>
    );
};

export default Cart;