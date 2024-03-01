
import { Link } from "react-router-dom";

import "./Item.css";

export const Item = ({ title, id, img, description }) => {
    return (
        <div className="item">
            <div className="card">
                <div className="card-body">
                    <h5 className="title">{title}</h5>
                    <img className="image" src={img} alt="" />
                    <p className="text">{description}</p>
                    <Link to={`/item/${id}`}>
                        <button className="link"> Ver detalles </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};