
import { useEffect, useState } from "react"
import { ItemDetail } from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getProduct } from "../../../asyncMock";
import { MoonLoader } from "react-spinners";

export const ItemDetailContainer = () => {

    const { id } = useParams();

    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getProduct(id)
            .then(resp => {
                setItem(resp);
                setIsLoading(false);
            });
    }, [])

    return (
        <>
            {isLoading ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}> <MoonLoader /> </div> : <ItemDetail {...item} />}
        </>
    )
}