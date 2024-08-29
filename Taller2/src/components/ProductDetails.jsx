import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ProductDetails({ product, onAddToCart, onClose }) {
  if (!product) return null;

  return (
    <Modal show={!!product} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.imageUrl} alt={product.name} className="img-fluid mb-3" />
        <p><strong>Descripción:</strong> {product.description}</p>
        <p><strong>Precio:</strong> ${product.price.toFixed(2)}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            onAddToCart(product);
            onClose(); 
          }}
        >
          Agregar al Carrito
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductDetails;
