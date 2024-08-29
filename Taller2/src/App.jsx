import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Card from './components/Card';
import camisaAzul from './assets/camisa_azul.jpg';
import pantalonNegro from './assets/pantalon_negro.jpg';
import chaquetaCuero from './assets/chaqueta_cuero.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [products] = useState([
    { id: 1, name: 'Camisa Azul', price: 29.99, description: 'Camisa de algodón azul', imageUrl: camisaAzul },
    { id: 2, name: 'Pantalón Negro', price: 49.99, description: 'Pantalón de mezclilla negro', imageUrl: pantalonNegro },
    { id: 3, name: 'Chaqueta de Cuero', price: 99.99, description: 'Chaqueta de cuero auténtico', imageUrl: chaquetaCuero }
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container">
      <div className="main-content">
        <div className="product-list">
          <h2 className="product-list-title">Lista de Productos</h2>
          <ProductList products={products} onViewDetails={handleViewDetails} />
        </div>
        <Card cartItems={cartItems} />
      </div>
      <ProductDetails product={selectedProduct} onAddToCart={handleAddToCart} onClose={handleClose} />
    </div>
  );
}

export default App;
