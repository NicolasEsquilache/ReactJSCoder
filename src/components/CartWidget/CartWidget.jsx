import { useContext } from "react";
import CartContext from '../../context/CartContext';
import { getCartQuantity } from "../utils";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const quantity = getCartQuantity(cart);

  return (
    <Link to="/checkout" className="nav-link">
      <div className="position-relative d-inline">
        <button className="btn btn-outline-light">
          <i className="bi bi-cart"></i>
        </button>
        {quantity > 0 && (
          <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
            {quantity}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartWidget;
