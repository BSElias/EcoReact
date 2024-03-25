
import ItemCountContainer from "../../common/itemCount/ItemCountContainer"
import "./ItemDetail.css"

export const ItemDetail = ({ title, description, img, price, stock, onAdd, initial }) => {
    return (

        <div className="item-container">
            <div className="item-d">
                <div className="card-d">
                    <div className="card-body-d">
                        <h5 className="title-d">{title}</h5>
                        <img className="image-d" src={img} alt="imagen moto" />
                        <p className="text-d"> {description}</p>
                        <p className="precio-d">Precio: ${price}</p>
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
        </div>
    )
}