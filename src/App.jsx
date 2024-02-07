
import { Navbar } from "./components/layout/Navbar"
import ItemListContainer from "./components/pages/ItemListContainer"

import "./App.css"


function App() {


  return (
    <div>
      <Navbar />
      <h1 className="titulo">Honda Shop</h1>
      <ItemListContainer greetings="Bienvenido!! Site in creation." />
    </div>
  )
}

export default App
