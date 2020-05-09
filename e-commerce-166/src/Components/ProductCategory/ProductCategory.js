import React, { useState } from 'react';
import category from '../../fakeData/category';
import ProductCategoryDetail from '../ProductCategoryDetail/ProductCategoryDetail';
import { Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductCategory.css'
const ProductCategory = () => {
    const categoryItems = category;
    const [categoryItem, setCategoryItem] = useState(categoryItems);

    return (
        <div className="productCategory-section">
            <Container>
                <Col>
                    <Row lg="4" md="3" sm="12">
                        {categoryItem.map(item => <ProductCategoryDetail item={item}></ProductCategoryDetail>)}
                    </Row>
                </Col>
            </Container>
        </div>
    );
};

export default ProductCategory;