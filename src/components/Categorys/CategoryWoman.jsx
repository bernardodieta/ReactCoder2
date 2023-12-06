
import React, { useState } from 'react'
import GetWomanProduct from './apiWoman.js';
import ProductDetail from './ProductDetail.jsx';

function CategoryWoman() {
    const { data } = GetWomanProduct();
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleClick = (product) => {
        setSelectedProduct(product);
        //console.log(product)
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

export default CategoryWoman