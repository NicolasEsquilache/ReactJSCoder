import CartWidget from "../CartWidget/CartWidget";

const NavBar =() =>{
    return(
        <nav>
            <h1>Mercadocoder</h1>

            <ul>
                <li>
                    <a href="#">Vehiculos</a>
                </li>
                <li>
                    <a href="#">Muebles</a>
                </li>
                <li>
                    <a href="#">Tecnologia</a>
                </li>
            </ul>

            <CartWidget/>
        </nav>
    );
};

export default NavBar;