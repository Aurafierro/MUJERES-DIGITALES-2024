import React from 'react';

function ProductItem({ name, price, description, imageUrl, onViewDetails }) {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><strong>${price.toFixed(2)}</strong></p>
        <button className="btn btn-primary" onClick={() => onViewDetails({ name, price, description, imageUrl })}>
          Ver Detalles
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
