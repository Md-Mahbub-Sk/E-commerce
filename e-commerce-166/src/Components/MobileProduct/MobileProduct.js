import React, { useState, useEffect } from 'react';
import Products from '../Products/Products';
import { Row, Container, Col, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import androids from '../../fakeData/android';
const MobileProduct = () => {
    const product80 = androids.slice(0, 80);

    const [products, setProducts] = useState(product80);

    const [cart, setCart] = useState([])

    useEffect((key) => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const findProduct = productKeys.map(pdKey => {
            const product = androids.find(pd => pd.key === pdKey)
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
                    <h1>Mobile Product is here</h1>
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
                                    
                                        <div>
                                            <img src="https://img.icons8.com/color/96/000000/shopping-cart.png" />
                                            <sup>
                                                <Badge variant="primary">{cart.length}</Badge>
                                            </sup>
                                        </div>
                                

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

export default MobileProduct;