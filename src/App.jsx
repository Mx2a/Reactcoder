import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <CartWidget /> {}
      <ItemListContainer greeting="¡Bienvenido a la tienda de pastas!" />
    </div>
  );
}

export default App;