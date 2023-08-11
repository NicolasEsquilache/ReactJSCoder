import CartWidget from "../CartWidget/CartWidget";

const NavBar =() =>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <a href="#" className="navbar-brand">Mercadocoder</a>

            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link">Vehiculos</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link active">Muebles</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Tecnologia</a>
                </li>
            </ul>

            <CartWidget/>
            </div>
        </nav>
    );
};

export default NavBar;