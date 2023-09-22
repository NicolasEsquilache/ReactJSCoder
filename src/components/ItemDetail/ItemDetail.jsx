import React from "react";
import { useContext } from "react";
import PropTypes from "prop-types";
import CartContext from '../../context/CartContext';

const ItemDetail = ({ item, isLoading, addItem }) => {
  if (isLoading) {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="spinner-border spinner-border-lg text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-2">Cargando...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!item) {
    return <h2>Producto no encontrado.</h2>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center">
            <img
              src={`/src/assets/${item.imageId}`}
              alt={item.title}
              className="img-fluid rounded-start mx-auto"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{item.title}</h1>
              <p className="card-text">{item.description}</p>
              <p className="card-text">Precio: US${item.price}</p>
              <p className="card-text">Stock: {item.stock}</p>
              <p className="card-text">Categoría: {item.categoryId}</p>
              <button
                onClick={() => addItem(item, 1)}
                className="btn btn-primary"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
  addItem: PropTypes.func,
};

export default ItemDetail;
