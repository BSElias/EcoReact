
export const ProductCard = ({ img, title, description, price }) => {
  return (
    <div className="card" >
      <img className="img" src={img} alt="imagen moto" />
      <h4 className="tit">{title}</h4>
      <h3 className="desc">{description}</h3>
      <h3 className="price">${price}</h3>
    </div>
  )
}


