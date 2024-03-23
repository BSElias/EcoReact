
import { useEffect, useState } from "react"
// import { getProducts } from "../../../asyncMock";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";

import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore"


export const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // setIsLoading(true);
        // getProducts()
        //     .then(resp => {
        //         if (category) {
        //             const productsFilter = resp.filter(product => product.category === category);
        //             setProducts(productsFilter);
        //         } else {
        //             setProducts(resp);
        //         }

        //         setIsLoading(false)
        //     });

        let productsCollection = collection(db, "products");
        let consulta = productsCollection;

        if (category) {
            let productsCollectionFiltered = query(
                productsCollection, where("category", "==", category)
            );
            consulta = productsCollectionFiltered;
        }
        getDocs(consulta).then(res => {
            let arrayLindo = res.docs.map((elemento) => {
                return { ...elemento.data(), id: elemento.id }
            });

            setProducts(arrayLindo);
        }).finally(() => setIsLoading(false));
    }, [category]);
    return (
        <>
            {isLoading ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} > <MoonLoader /> </div> : <ItemList products={products} />}
        </>
    )
}
