import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items, isLoading }) => {
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

    return (
        <div className="container mt-4">
          <div className="row">
            {items.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <Link to={`/item/${item.id}`} className="text-decoration-none">
                    <div className="card-body">
                      <img
                        src={`/Images/${item.imageId}`}
                        alt={item.title}
                        className="card-img-top"
                      />
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-text">Precio: US${item.price}</p>
                      <p className="card-text">Categoría: {item.categoryId}</p>
                      <Link to={`/item/${item.id}`} className="btn btn-primary">
                        Ver Detalles
                      </Link>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    


ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
};

export default ItemList;
