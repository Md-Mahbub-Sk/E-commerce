import React from 'react';
import './ReviewItem.css'
import {  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReviewItem = (props) => {
    const { name, img, quantity, price,key } = props.product;
    const totalPrice = parseFloat((price*quantity).toFixed(2));
    
    return (
        <div className="reviewItem-section" >
            <img onClick={()=>props.handleRemoveFromCart(key)} style={{cursor:"pointer"}} src="https://img.icons8.com/android/24/000000/cancel-2.png" alt="icon"/>
            <div className="review-item" >
            
                <div className="col-md-6">
                    
                    <img src={img} className="d-flex align-items-center" height="80px" width="80px" alt="" />
                    <p className="review-item-product-detail" >
                        <span>Product Name: </span>{name}
                        <p className="d-block"><span>Deal Code: </span>{key}</p>
                    </p>
                    
                </div>
                <h3 className="col-md-2 text-center" >{quantity}</h3>
                <h3 className="col-md-2 ">${price}</h3>
                <h3>${totalPrice}</h3>
            </div>

            
        </div>

    );
};

export default ReviewItem;