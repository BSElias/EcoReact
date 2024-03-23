import { Button } from "@mui/material"
import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

import "./Cart.css"



export const Cart = () => {

    const { cart, clearCart, removeById, getTotalPrice } = useContext(CartContext)

    let total = getTotalPrice()

    const limpiarConAlerta = () => {
        Swal.fire({
            title: "Estas seguro de limpiar el carrito?",
            showDenyButton: true,
            confirmButtonText: "Si, limpiar carrito",
            denyButtonText: `No, me arrepenti`
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart()
                Swal.fire("Limpiado!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("El carrito queda como estaba", "", "info");
            }
        });

    }


    return (

        <div className="cart-contained">
            <div className="container-products">
                {cart.map((product) => (
                    <div key={product.id} className="cart-products" >
                        <img src={product.img} alt="imagen de producto" />
                        <h2>Nombre:{product.title}</h2>
                        <h2>${product.price}</h2>
                        <h2>Cantidad:{product.quantity}</h2>
                        <Button onClick={() => removeById(product.id)} variant="contained" size="small">Eliminar</Button>
                    </div>
                ))}

                <div className="cart-info">
                    <h2>Descripcion del carrito:</h2>
                    <h3>Precio total:${total}</h3>
                    <h3>Descuento: </h3>
                    <h3>Precio final: </h3>

                    {cart.length > 0 ? (
                        <div>
                            <Button onClick={limpiarConAlerta} variant="contained" size="small">
                                Limpiar carrito
                            </Button>

                            <Link to="/checkout">
                                <Button variant="contained" size="small">Terminar compra</Button>
                            </Link>
                        </div>
                    ) : (
                        <Link to="/">
                            <Button variant="contained" size="small">Agregar productos</Button>
                        </Link>
                    )}

                    <h2>Precio total del carrito:$ {total}</h2>
                </div>
            </div>
        </div>
    );
};
