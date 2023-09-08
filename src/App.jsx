import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget'; // Importa CartWidget
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <CartWidget /> {/* Agrega CartWidget aquí */}
      <ItemListContainer greeting="¡Bienvenido a la tienda de pastas!" />
    </div>
  );
}

export default App;