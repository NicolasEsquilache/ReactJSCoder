import React from "react";
import PropTypes from "prop-types";

const ItemDetail = ({ item, isLoading }) => {
    if (isLoading) {
        return <h2>Cargando...</h2>;
    }

    if (!item) {
        return <h2>Producto no encontrado.</h2>;
    }

    return (
        <div className="container">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.image} alt={item.name} className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{item.name}</h1>
                            <p className="card-text">${item.price}</p>
                            <p className="card-text">{item.category}</p>
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
};

export default ItemDetail;
