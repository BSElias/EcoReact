
import ItemCountContainer from "../../common/itemCount/ItemCountContainer"

export const ItemDetail = ({ title, description, img, price, stock }) => {
    return (
        <div className="item">
            <div className="card">
                <div className="card-body">
                    <h5 className="title">{title}</h5>
                    <img className="image" src={img} alt="imagen moto" />
                    <p className="text"> {description}</p>
                    <p className="precio">Precio: ${price}</p>
                    <ItemCountContainer stock={stock} />
                </div>
            </div>
        </div>
    )
}