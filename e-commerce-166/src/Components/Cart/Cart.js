import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
     const totalPrice = cart.reduce((total, pd) => total + pd.price * pd.quantity, 0);
    // let totalPrice = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     let product = cart[i];
    //     totalPrice = totalPrice + product * product.quantity;
    //     console.log(totalPrice)
    //     console.log(product.quantity);
    // }
    

    // shipping cost add  here...

    let shipping = 0;
    if(totalPrice>35){
        shipping=0
    }else if(totalPrice>15){
        shipping= 4.22;
    }else if(totalPrice>0){
        shipping=10;
    }

    // tax const add here..
    const tax = Math.round(Number((totalPrice/12)));
    const fixedTotalPrice = parseFloat((totalPrice));
    const grandTotal = Math.round((fixedTotalPrice + shipping + tax));


    return (
        <div className="cart-section">
            <img  src="https://img.icons8.com/color/144/000000/super-mario.png" alt="icon"/>
            <h1>Put your product..</h1>
            <div className=" arrow-icon" >
                <span>
                    <img src="https://img.icons8.com/color/48/000000/double-down.png" alt="icon"/>
                </span>
            </div>
            <a href="/review" className="icon-cart-btn">
                <OverlayTrigger
                    key={"top"}
                    placement={"top"}
                    overlay={
                        <Tooltip id={`tooltip-${"top"}`}>
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
            <h4>order-summary: {}</h4>
            <h4>product price: <span className="title-txt">${fixedTotalPrice}</span></h4>
            <h4>shipping cost: <span className="title-txt">${shipping}</span></h4>
            <h4>tax +VAT : <span className="title-txt">${tax}</span></h4>
            <h4>total price: <span className="title-txt">${grandTotal}</span></h4>

        </div>
    );
};

export default Cart;