import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  return (
    <div className="container mt-5">
      {product ? (
        <div className="card">
          <img src={product.image} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">${product.price}</p>
          </div>
        </div>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;