import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, onViewDetails }) {
  return (
    <div className="product-list">
   
      {products.map((product) => (
        <ProductItem
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          imageUrl={product.imageUrl}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}

export default ProductList;
