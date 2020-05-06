import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/index';
import Products from '../Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';

import './ProductDetail.css';
import {  Col } from 'react-bootstrap';
const ProductDetail = () => {
    const { productKey } = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    
    return (
        <div>
            <Col>
                <Products  showAddToCart={false} product={product}></Products>
            </Col>
        </div>
    );
};

export default ProductDetail;