import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importa el icono de carrito

function Card({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <div className="cart-icon">
        <FaShoppingCart />
      </div>
      <h5 className="cart-title">Carrito</h5>
      <ul className="list-group mb-3">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))
        ) : (
          <li className="list-group-item">El carrito está vacío</li>
        )}
      </ul>
      <h6 className="card-subtitle mb-2 text-muted">Total: ${total.toFixed(2)}</h6>
    </div>
  );
}

export default Card;
