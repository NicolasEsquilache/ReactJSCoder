import React from "react";
import { useContext } from "react";
import PropTypes from "prop-types";
import CartContext from '../../context/CartContext';

const ItemDetail = ({ item, isLoading ,addItem }) => {
    if (isLoading) {
        return <h2>Cargando...</h2>;
    }

    if (!item) {
        return <h2>Producto no encontrado.</h2>;
    }
        console.log(item);
    return (
        <div className="container">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{item.title}</h1>
                            <img src={`/src/assets/${item.imageId}`} alt={item.title} />
                            <p className="card-text">Descripcion: {item.description}</p>
                            <p className="card-text">Precio US${item.price}</p>
                            <p className="card-text">Stock: {item.stock}</p>
                            <p className="card-text">Categoría: {item.categoryId}</p>
                            <button onClick={()=> addItem(item,1)}>Agregar al carrito</button>
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
