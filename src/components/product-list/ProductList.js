import React, { useState, useEffect } from 'react';
import Product from './Product';

const ProductList = () => {

    const [productList, setProductList] = useState([]);


    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await fetch(`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${185}`);
        const data = await response.json();
        setProductList(data.products);
        console.log(data.products);
    }

    return (
        <div>
            {productList.map(product =>(
                <Product
                    key={product.id}
                    product_image = {product.image_urls_webp.x200}
                    product_name = {product.name}
                    product_price = {product.price}
                />
            ))}
        </div>
    )
}

export default ProductList;
