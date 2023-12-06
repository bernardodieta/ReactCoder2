import React from 'react';

function ProductDetail({ product }) {
    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.price}</p>
            <p>{product.description}</p>            
        </div>
    );
}

export default ProductDetail;