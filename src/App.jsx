import { BrowserRouter, Routes, Route } from "react-router-dom"
//import { useState } from "react"

import Inicio from './pages/inicio'
import Error from './pages/error'
import Details from './details'

import Menu from './components/Menu'

function App() {

    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/products/:product" element={<Details />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App