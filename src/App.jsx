import { BrowserRouter, Routes, Route } from "react-router-dom"
//import { useState } from "react"

import Inicio from './pages/inicio'
import Error from './pages/error'
import Details from './details'

import Menu from './components/Menu'
import Winter2026 from "./pages/winter2026"

function App() {

    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/winter2026" element={<Winter2026 />} />
                <Route path="/products/:product" element={<Details />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App