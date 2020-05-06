import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData';
import Products from '../Products/Products';

import { Row, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
    const product80 = fakeData.slice(0, 80);
    const [products, setProducts] = useState(product80);

    const [cart, setCart] = useState([])
    const handleAddProduct = (product) => {
        const addedKey = product.key
        const sameProduct = cart.find(pd => pd.key === addedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
         
            sameProduct.quantity = count;
           
            const others = cart.filter(pd=> pd.key !== addedKey);
            newCart = [...others,sameProduct];
            

        }else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        
        
        addToDatabaseCart(product.key,count);
    }

    return (
        <div>

            <div className="product-container">

                <Container >

                    <Row>
                        
                        <Col className="d-flex align-items-center cart-section justify-content-center">
                            <Cart cart={cart}></Cart>
                        </Col>
                        {
                            products.map(product => <Products
                                key = {product.key}
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