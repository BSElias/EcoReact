

const products = [
    {
        id: "1",
        title: "Honda CBR1000RR-R SP",
        price: "30000",
        description: "Inconfundible como siempre, la CBR1000RR-R SP se ofrece ahora en una 30th Anniversary Edition",
        img: "https://res.cloudinary.com/dcodgi9y9/image/upload/v1707433280/314_0s-0img-cbr1000rr-sp_g138im.jpg",
        stock: "8",
        category: "Supersport",
    },
    {
        id: "2",
        title: "Honda CBR1000RR",
        price: "28000",
        description: "Su diseño deportivo la hace indudablemente parte de la histórica familia más ganadora en pista, las CBR. Esta moto es más liviana, más poderosa, y tiene más control.",
        img: "https://res.cloudinary.com/dcodgi9y9/image/upload/v1707433403/185_1s-1web-cbr1000-perfil_vgx8cu.jpg",
        stock: "3",
        category: "Supersport",
    },
    {
        id: "3",
        title: "Honda crf 250",
        price: "17000",
        description: "Chasis, plasticos, motor, escape… cada detalle del diseño de la CRF250R 2024 está pensado para una performance óptima en el circuito de MX.",
        img: "https://res.cloudinary.com/dcodgi9y9/image/upload/v1707433452/327_0s-0350-0s-0img-crf250r-diseno_p5pirx.jpg",
        stock: "5",
        category: "Offroad",
    },
    {
        id: "4",
        title: "Honda CRF 450",
        price: "20000",
        description: "La combinación de HSTC (Honda Selectable Torque Control), EMSB (Engine Mode Select Button) y HRC Launch Control, permite ajustar con detalle el comportamiento de la CRF450R para todo tipo de condiciones de manejo.",
        img: "https://res.cloudinary.com/dcodgi9y9/image/upload/v1707434286/59c-064c-0color_tqmhf1.jpg",
        stock: "4",
        category: "Offroad",
    },
    {
        id: "5",
        title: "Honda CB1000R",
        price: "21000",
        description: "Una naked deportiva que marca la diferencia. Compacta y robusta, es el foco de atención de todas las miradas con sus acabados metálicos pulidos que son el reflejo de la tradicional Café Racer potente y con carácter.",
        img: "https://res.cloudinary.com/dcodgi9y9/image/upload/v1707435653/249_0s-0web-cbr1000-diseno-2_kwxx9a.jpg",
        stock: "2",
        category: "Naked",
    },
    {
        id: "6",
        title: "Honda CRF1100L AFRICA TWIN ADVENTURE SPORTS",
        price: "23000",
        description: "Bastidor más ligero, con sub-chasis de aluminio separado y basculante estilo CRF450R, más rígido y ligero para mejorar la tracción y adherencia de la rueda trasera.",
        img: "https://res.cloudinary.com/dcodgi9y9/image/upload/v1707836271/51c-1web-africa-twin-adventure-colores-2_twt5lw.jpg",
        stock: "2",
        category: "Touring",
    },
];

// const obtenerProductos = new Promise((resolve, reject) => {
//     //Simulamos un retraso de red
//     setTimeout(() => {
//         resolve(productos);
//     }, 2000);
// });

// export default obtenerProductos;

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
