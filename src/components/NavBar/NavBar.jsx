import {Link,NavLink} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar =() =>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <nav >
            <Link to= "/" className="navbar-brand">Mercadocoder</Link>

            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <NavLink to= "/category/drone" className="nav-link">Drones</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to= "/category/camera" className="nav-link">Camaras</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to= "/category/tecnology" className="nav-link">Tecnologia</NavLink>
                </li>
            </ul>
            </nav>
 
            <div><CartWidget/></div>
            </div>
        </nav>
    );
};

export default NavBar;