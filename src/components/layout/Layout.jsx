import { Outlet } from "react-router-dom"
import Navbar from "./navBar/Navbar"
import { Footer } from "./footer/Footer"



export const Layout = () => {
    return (
        <>
            <Navbar />
            <h1 className="titulo">Honda Shop</h1>
            <Outlet />
            <Footer />
        </>
    )
}
