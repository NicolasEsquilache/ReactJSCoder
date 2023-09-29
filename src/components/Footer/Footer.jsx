import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email) {
            toast.error('Por favor, ingresa tu dirección de correo electrónico.', {
                position: 'bottom-right',
                autoClose: 3000,
            });
            return;
        }
        // Aca iria la lógica de enviar los mails o guardarlos en la base de datos para posteriores correos en
        // Por ahora, solo mostramos el Toastify como ejemplo.
        toast.success('Te has suscrito correctamente. ¡Gracias!', {
            position: 'bottom-right',
            autoClose: 3000,
        });
        setEmail('');
    };

    return (
        <footer className="bg-dark text-white p-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Información de la tienda</h4>
                        <p>MercadoNico</p>
                        <p>Dirección: 123 Calle Siempre viva, Springfild</p>
                        <p>Email: info@mercadonico.com</p>
                        <p>Teléfono: (123) 456-7890</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Enlaces útiles</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Acerca de nosotros</a></li>
                            <li><a href="#" className="text-white">Términos y condiciones</a></li>
                            <li><a href="#" className="text-white">Política de privacidad</a></li>
                            <li><a href="#" className="text-white">Envío y devoluciones</a></li>
                            <li><a href="#" className="text-white">Preguntas frecuentes</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Suscríbete a nuestro Newsletter</h4>
                        <p>Recibe ofertas exclusivas y actualizaciones</p>
                        <form onSubmit={handleSubscribe}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Tu dirección de correo"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary">
                                        Suscribirse
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; 2023 MercadoNico. Todos los derechos reservados.</p>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-inline text-md-right">
                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </footer>
    );
};

export default Footer;
