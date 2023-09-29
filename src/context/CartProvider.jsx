import { useState } from "react";
import CartContext from "./CartContext";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        const itemInCart = cart.find((item) => item.id === id);
        return !!itemInCart;
    };

    const addItem = (product, quantity) => {

        const itemInCart = isInCart(product.id);

        if (itemInCart) {
            const newCart = cart.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + quantity,
                    };
                }

                return item;
            });
            setCart(newCart);
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
    };

    const removeItem = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    };

    const clear = () => {
        setCart([]);
        toast.success("Carrito borrado correctamente.", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const advBorrar = () => {

        Swal.fire({
            title: 'Estás seguro?',
            text: "No podrás revertir este cambio!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Borrado!',
                    'Su carrito ha sido borrado.',
                    'success'
                );
                clear();
            }
        })

    };


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, advBorrar, isInCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;