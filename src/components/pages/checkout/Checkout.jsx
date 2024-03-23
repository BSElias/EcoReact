import { Link } from "react-router-dom";
import "./Checkout.css"

export const Checkout = ({ envioDeFormulario, capturar, orderId }) => {
    return (
        <div>
            {
                orderId ? (
                    <div className="checkout-message">
                        <h1>¡Gracias por tu compra! Tu numero de orden es  {orderId}</h1>
                        <Link to="/">
                            <button>Seguir comprando</button>
                        </Link>
                    </div>
                ) : (
                    <form className="checkout-form" onSubmit={envioDeFormulario}>
                        <input type="text" placeholder="Ingrese su nombre" onChange={capturar} name="name" />
                        <input type="text" placeholder="Ingrese su telefono" onChange={capturar} name="phone" />
                        <input type="text" placeholder="Ingrese su direccion de correo" onChange={capturar} name="email" />
                        <button type="submit">Comprar</button>
                    </form>)
            }
        </div>
    );
};



