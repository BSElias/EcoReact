import { ProductCard } from "../common/ProductCard"

export const ItemListContainer = ({ greetings }) => {
    return <div className="itemlist">

        <p>{greetings}</p>

        <h2>Productos:</h2>

        <ProductCard Titulo={"Honda"} Categoria={"Supersport"} Descripcion={"CBR1000RR - Inconfundible como siempre, la CBR1000RR-R SP se ofrece ahora en una 30th Anniversary Edition"} Precio={"12344"} />
        <ProductCard Titulo={"Honda"} Categoria={"Supersport"} Descripcion={"CBR1000RR-R SP - Su diseño deportivo la hace indudablemente parte de la histórica familia más ganadora en pista, las CBR. Esta moto es más liviana, más poderosa, y tiene más control"} Precio={"11144"} />
        <ProductCard Titulo={"Honda"} Categoria={"Offroad"} Descripcion={"CRF 250 - Chasis, plasticos, motor, escape… cada detalle del diseño de la CRF250R 2024 está pensado para una performance óptima en el circuito de MX."} Precio={"15344"} />
        <ProductCard Titulo={"Honda"} Categoria={"Offroad"} Descripcion={"CRF 450 - El propulsor monocilíndrico de 450cc, asociado a una transmisión de 5 velocidades, recibió ajustes para maximizar el rendimiento. El embrague hidráulico de 8 discos ofrece un control y tacto excelentes y reduce las posibilidades de patinamiento."} Precio={"15644"} />



    </div>
}
export default ItemListContainer