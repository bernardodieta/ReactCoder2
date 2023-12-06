import React, { useState } from 'react'
import GetMenProduct from './apiMan.js';
import ProductDetail from './ProductDetail.jsx';

function CategoryMen() {
    const { data, error } = GetMenProduct();
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleClick = (product) => {
        setSelectedProduct(product);
    }


    if (!data) {
        return <div>Loading...</div>;
    }

    if (selectedProduct) {
        return <ProductDetail product={selectedProduct} />;
    }

    return (
        <div className='home-container'>
            {data.map((item, index) => (
                <div key={index} className='product-card'>
                    <h2>{item.title.substring(0, 30) + '...'}</h2>
                    <img src={item.image} alt="" />
                    <p>{item.price}</p>
                    <button className='btn-comprar' onClick={() => handleClick(item)}>Buy</button>
                </div>
            ))}
        </div>
    );
};

export default CategoryMen