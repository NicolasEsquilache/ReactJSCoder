import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <h2>Cargando</h2>;
    }

    return (
        <div className="container">
            <h1 className="text-center mt-4 mb-5">ItemList</h1>
            <div className="row">
                {items.map((item) => (
                    <div key={item.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <Link to={`/item/${item.id}`} className="text-decoration-none">
                                <div className="card-body">
                                <img src={`/src/assets/${item.imageId}`} alt={item.title} />
                                    <h3 className="card-title">{item.title}</h3>
                                    <p className="card-text">US${item.price}</p>
                                    <p className="card-text">{item.categoryId}</p>
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
