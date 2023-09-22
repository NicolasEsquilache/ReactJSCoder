import { useContext, useState} from "react";
import CartContext from "../context/CartContext";
import { getCartTotal, mapCartToOrderItems } from "./utils";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../services";
import { Link } from "react-router-dom";

const Checkout =() => {
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const {cart, clear} =useContext(CartContext);

    const total =getCartTotal(cart)

    const handleCheckout= () => {
        const order={
            buyer:{
            name: "Nicolas",
            phone: "1151493392",
            email: "john@example.com",
            address: "Av. 123",
            city: "Sao Paulo",
            state: "SP",
            country: "Brazil"
            },
            items: mapCartToOrderItems(cart),
            total,
            date: serverTimestamp(),
        };
        setIsLoading(true);
        createOrder(order)
        .then((docRef)=>{
            setOrderId(docRef.id);
            setIsLoading(false);
            clear();
         });
    };

    return (
        <div className="container mt-4">
          <h2>Resumen de compra</h2>
    
          {orderId && <p>El id de la orden es: {orderId}</p>}
          {!orderId && (
            <>
              <div>
                <h4>Formulario de contacto</h4>
                {/* Agrega aquí tu formulario de contacto */}
              </div>
    
              <div>
                <ul className="list-group">
                  {cart.map((item) => (
                    <li key={item.id} className="list-group-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <img
                            src={`/src/assets/${item.imageId}`}
                            alt={item.title}
                            className="img-thumbnail me-3"
                            style={{ width: "80px", height: "80px" }}
                          />
                          <div>
                            <p>{item.title}</p>
                            <p>Cantidad: {item.quantity}</p>
                          </div>
                        </div>
                        <div>
                          <p>Precio por unidad: ${item.price}</p>
                          <p>Subtotal: ${item.price * item.quantity}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
    
              <p className="mt-3">Total de la compra: ${total}</p>
    
              <div className="mt-3">
                <button onClick={handleCheckout} className="btn btn-primary">
                  Finalizar compra
                </button>
                <Link to="/" className="btn btn-secondary ms-2">
                  Seguir comprando
                </Link>
                <button onClick={clear} className="btn btn-danger ms-2">
                  Borrar carrito
                </button>
              </div>
    
              {isLoading && <p className="mt-3">Procesando compra...</p>}
            </>
          )}
        </div>
      );
};

export default Checkout;