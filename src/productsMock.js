
export let products = [
    {
        title: "Honda CBR1000RR",
        price: "28000",
        description: "Su diseño deportivo la hace indudablemente parte de la histórica familia más ganadora en pista, las CBR. Esta moto es más liviana, más poderosa, y tiene más control.",
        img: "https://res.cloudinary.com/dcodgi9y9/image/upload/v1707433403/185_1s-1web-cbr1000-perfil_vgx8cu.jpg",
        stock: "3",
        category: "Supersport",
    },
    {

        title: "Honda CRF 450",
        price: "20000",
        description: "La combinación de HSTC (Honda Selectable Torque Control), EMSB (Engine Mode Select Button) y HRC Launch Control, permite ajustar con detalle el comportamiento de la CRF450R para todo tipo de condiciones de manejo.",
        img: "https://res.cloudinary.com/dcodgi9y9/image/upload/v1707434286/59c-064c-0color_tqmhf1.jpg",
        stock: "4",
        category: "Offroad",
    },
    {

        title: "Honda CB1000R",
        price: "21000",
        description: "Una naked deportiva que marca la diferencia. Compacta y robusta, es el foco de atención de todas las miradas con sus acabados metálicos pulidos que son el reflejo de la tradicional Café Racer potente y con carácter.",
        img: "https://res.cloudinary.com/dcodgi9y9/image/upload/v1707435653/249_0s-0web-cbr1000-diseno-2_kwxx9a.jpg",
        stock: "2",
        category: "Naked",
    },
    {

        title: "Honda CRF1100L AFRICA TWIN ADVENTURE SPORTS",
        price: "23000",
        description: "Bastidor más ligero, con sub-chasis de aluminio separado y basculante estilo CRF450R, más rígido y ligero para mejorar la tracción y adherencia de la rueda trasera.",
        img: "https://res.cloudinary.com/dcodgi9y9/image/upload/v1707836271/51c-1web-africa-twin-adventure-colores-2_twt5lw.jpg",
        stock: "2",
        category: "Touring",
    },
];


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(products);
            }, 1500);
        } else {
            reject("No hay productos");
        }
    });
};

export const getProduct = (id) => {

    return new Promise((resolve, reject) => {
        if (products.length > 0) {

            const item = products.find(product => product.id === id);

            setTimeout(() => {
                if (item) {
                    resolve(item)
                } else {
                    reject(`No se encuentra el producto con el id ${id}`);
                }
            }, 1500)

        } else {
            reject("No hay productos")
        }
    })

}
