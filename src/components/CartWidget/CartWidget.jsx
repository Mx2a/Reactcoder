import React from 'react';

const CartWidget = () => {

  const itemCount = 5;

  return (
    <div>
      <i className="carrito-compras"></i>
      <span>{itemCount}</span>
    </div>
  );
};

export default CartWidget;