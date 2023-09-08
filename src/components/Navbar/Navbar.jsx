import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <nav>
      <div>"La Tata Fabrica de Pastas"</div>
      <ul>
        <li>Producto 1</li>
        <li>Producto 2</li>
        <li>Producto 3</li>
      </ul>
      <CartWidget /> {}
    </nav>
  );
};

export default Navbar;