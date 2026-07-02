import { BrowserRouter, Routes, Route } from "react-router-dom"
//import { useState } from "react"

import Inicio from './pages/inicio'
import Error from './pages/error'
import Details from './details'
import Contacto from "./pages/contacto"
import Productos from "./pages/productos"
import Faq from "./pages/faq"

import Menu from './components/Menu'
import Footer from './components/Footer'

function App() {

    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/products/:product" element={<Details />} />
                <Route path="/faq" element={<Faq />} /> 
                <Route path="*" element={<Error />} />
                
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}


export default App