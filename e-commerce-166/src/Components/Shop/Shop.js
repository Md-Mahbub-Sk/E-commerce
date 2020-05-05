import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData';
import Products from '../Products/Products';

import { Row, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from '../Cart/Cart';
const Shop = () => {
    const productFirst50 = fakeData.slice(0, 51);
    const [products, setProducts] = useState(productFirst50);

    const [cart, setCart] = useState([])
    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(product,"product added");
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