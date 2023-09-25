import React, { useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({ item, isLoading, addItem }) => {
  const [quantity, setQuantity] = useState(1);
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

  const incrementQuantity = () => {
    if (quantity < item.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mt-4">
      <ToastContainer />
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center">
            <img
              src={`/Images/${item.imageId}`}
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
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button
                    className="btn btn-primary"
                    onClick={decrementQuantity}
                    type="button"
                  >
                    -
                  </button>
                </div>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Cantidad"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                  min="1"
                  max={item.stock}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    onClick={incrementQuantity}
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => {
                  addItem(item, quantity);
                  toast.success(`${quantity} ${item.title}(s) se agregaron al carrito.`, {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }}
                className="btn btn-primary"
                type="button"
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