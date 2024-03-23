import { useState } from "react"
import ItemCount from "./ItemCount";

import Swal from 'sweetalert2'

const ItemCountContainer = ({ stock, onAdd, initial = 1 }) => {

    const [counter, setCounter] = useState(initial);

    const addOne = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        } else {
            Swal.fire({
                icon: "error",
                title: "Limite maximo",
                text: "No tenemos mas unidades en stock!",
            });
        }
    };

    const subOne = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        } else {
            Swal.fire({
                icon: "error",
                text: "No puede ser menor de 1!",
            });
        }
    };

    return <ItemCount counter={counter} addOne={addOne} subOne={subOne} onAdd={onAdd} />
};

export default ItemCountContainer;