import { Cart } from "../components/pages/cart/Cart";
import { CheckoutContained } from "../components/pages/checkout/CheckoutContained";
import { ItemDetailContainer } from "../components/pages/itemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "../components/pages/itemListContainer/ItemListContainer";

export const routes = [

    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id: "category",
        path: "/category/:category",
        Element: ItemListContainer
    },
    {
        id: "cart",
        path: "/cart",
        Element: Cart
    },
    {
        id: "detail",
        path: "/item/:id",
        Element: ItemDetailContainer
    }, {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContained
    },
]
