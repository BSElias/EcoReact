

export const ProductCard = ({ Titulo, Descripcion, Precio, Categoria }) => {
  return (
    <div className="card" style={{ border: "1px solid red", width: "300px", height: "250px", margin: "20px" }}>
      <img src="" alt="" />
      <h4>{Titulo}</h4>
      <h3>{Categoria}</h3>
      <h3>{Descripcion}</h3>
      <h3>${Precio}</h3>
    </div>
  )
}
