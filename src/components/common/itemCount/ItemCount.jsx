
import { Button } from "@mui/material";
const ItemCount = ({ counter, addOne, subOne }) => {
    return (
        <>
            <div style={{ marginBottom: "10px", display: "Flex", gap: "10px", }}>
                <Button variant="outlined-dark" onClick={addOne}> Sumar </Button>
                <h3>{counter}</h3>
                <Button variant="outline-dark" onClick={subOne} disabled={counter === 1 ? true : false}>Restar</Button>

                <Button variant="outline-dark" > Agregar al carrito </Button>
            </div>
        </>
    )
}
export default ItemCount;