import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">Mercadocoder</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to="/category/drone" className="nav-link" activeclassname="active">Drones</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/camera" className="nav-link" activeclassname="active">Camaras</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/tecnology" className="nav-link" activeclassname="active">Tecnologia</NavLink>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;