import { Navbar } from "./components/layout/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { Item } from "./components/pages/item/Item";

import { Cart } from "./components/pages/Cart";
import ItemCountContainer from "./components/common/itemCount/ItemCountContainer";



const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <h1 className="titulo">Honda Shop</h1>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

