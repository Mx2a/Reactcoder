import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ItemListContainer = ({ products }) => {
  const { id } = useParams();
  const filteredProducts = id
    ? products.filter((product) => product.id.toString() === id)
    : products;

  return (
    <div className="container mt-5">
      <h2>Lista de Productos</h2>
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">${product.price}</p>
                <Link to={`/item/${product.id}`} className="btn btn-primary">Ver Detalles</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;