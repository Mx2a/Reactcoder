import React from 'react';

const CartWidget = () => {
  // Número hardcodeado para la cantidad de elementos en el carrito (puedes cambiarlo)
  const itemCount = 5;

  return (
    <div>
      <i className="fas fa-shopping-cart"></i>
      <span>{itemCount}</span>
    </div>
  );
};

export default CartWidget;