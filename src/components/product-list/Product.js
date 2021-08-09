import React from 'react';
import './Product.css';

const Product = ({product_image, product_name, product_price}) => {
    return (
        <div className="product">
            <img src={product_image} alt="product_img" />
            <div className="details" >
                <p className="name">{product_name}</p>
                <p><strong><span>&#8377;</span> {product_price}</strong></p>
                <button className="button">Add to cart</button>
            </div>
        </div>
    )
}

export default Product;
