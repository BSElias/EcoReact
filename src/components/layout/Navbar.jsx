import CartWidget from "../common/CartWidget"

export const Navbar = () => {
    return <div className="navbar">
        <img className="logo" src="https://motos.honda.com.ar/assets/honda-motos-logo-8228287956be08ac306e59b11dfcfe9e.png" alt="logo" />
        <ul >
            <li>Todas</li>
            <li>D-Pista</li>
            <li>D-Cross</li>
            <li>Nosotros</li>
        </ul>
        <div className="carrito">
            <CartWidget />
        </div>

    </div>
}

export default Navbar