import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { getCartTotal, mapCartToOrderItems } from "./utils";
import { serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import { createOrder } from "../services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { cart, clear } = useContext(CartContext);

  const { name, email, phone } = formState;

  const total = getCartTotal(cart);

  const isFormValid = name && email && phone;

  const handleCheckout = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const order = {
      buyer: formState,
      items: mapCartToOrderItems(cart),
      total,
      date: serverTimestamp(),
    };

    createOrder(order)
      .then((docRef) => {
        setOrderId(docRef.id);
        setIsLoading(false);
        // No borramos el carrito aquí para mantener los datos visibles en el checkout
        // clear();
      });
  };

  const onChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container mt-4">
      <ToastContainer />
      <h1 className="text-center mb-4">Resumen de compra</h1>

      {orderId && (
        <div className="order-summary">
          <h2>Gracias por tu compra</h2>
          <p className="text-center">Tu ID de compra es: {orderId}</p>

          <h3>Detalles de la compra</h3>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src={`/Images/${item.imageId}`}
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
          <p className="mt-3">Total de la compra: ${total}</p>
          <Link to="/" className="btn btn-success me-2" onClick={() => clear()}>
            Volver al inicio
          </Link>

        </div>
      )}

      {!orderId && (
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleCheckout}>
              <h2 className="text-center mt-3">Ingresa tus datos para completar la compra</h2>
              <div className="container p-2">
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={name}
                    onChange={onChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={formState.apellido}
                    onChange={onChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={onChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-success w-50" disabled={!isFormValid} type="submit">
                    Crear orden
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-6">
            <h2>Resumen del carrito</h2>
            <ul className="list-group">
              {cart.map((item) => (
                <li key={item.id} className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        src={`/Images/${item.imageId}`}
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
            <p className="mt-3">Total de la compra: ${total}</p>
            <div className="row mt-4">
              <div className="col-md-12 d-flex justify-content-center">
                <Link to="/" className="btn btn-secondary me-2">
                  Seguir comprando
                </Link>
                <button
                  onClick={() => {
                    clear();
                    toast.success("Carrito borrado correctamente.", {
                      position: "bottom-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  }}
                  className="btn btn-danger"
                >
                  Borrar carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <div className="col-md-12 text-center">
              <div className="spinner-border spinner-border-lg text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p className="mt-2">Procesando Compra...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
