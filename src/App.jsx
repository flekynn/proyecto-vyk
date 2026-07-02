import { BrowserRouter, Routes, Route } from "react-router-dom"
//import { useState } from "react"

import Inicio from './pages/inicio'
import Error from './pages/error'
import Details from './details'

import Contacto from "./pages/contacto"
import Menu from './components/Menu'
import Productos from "./pages/productos"

function App() {

    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/productos" element={<Productos />} />
                <Route path="/products/:product" element={<Details />} />
                <Route path="*" element={<Error />} />

                <Route path="/" element={<Inicio />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/products/:product" element={<Details />} />
                <Route path="*" element={<Error />} />
                
            </Routes>
        </BrowserRouter>
    )
}


export default App