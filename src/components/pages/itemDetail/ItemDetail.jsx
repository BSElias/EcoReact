
import ItemCountContainer from "../../common/itemCount/ItemCountContainer"
// import "./ItemDetail.css"

export const ItemDetail = ({ title, description, img, price, stock, onAdd, initial }) => {
    return (
        <div className="item">
            <div className="card">
                <div className="card-body">
                    <h5 className="title">{title}</h5>
                    <img className="image" src={img} alt="imagen moto" />
                    <p className="text"> {description}</p>
                    <p className="precio">Precio: ${price}</p>
                    {
                        initial && <h3>Ya tienes {initial} en el carrito</h3>
                    }
                    <ItemCountContainer
                        stock={stock}
                        onAdd={onAdd}
                        initial={initial} />
                </div>
            </div>
        </div>
    )
}