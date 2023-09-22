import { useContext } from "react";
import CartContext from '../../context/CartContext';
import { getCartQuantity } from "../utils";
import { Link } from "react-router-dom";


const CartWidget = () => {

    const { cart } = useContext(CartContext);

    const quantity = getCartQuantity(cart);
    //console.log(cart);

    return (
        <Link to="/checkout" className="nav-link">
          <div className="position-relative">
            <button className="btn btn-outline-light">
              <i className="bi bi-cart"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {quantity > 0 ? quantity : ""}
              </span>
            </button>
          </div>
        </Link>
      );
};
export default CartWidget;