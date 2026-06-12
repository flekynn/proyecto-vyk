import { BrowserRouter, Routes, Route } from "react-router-dom"
//import { useState } from "react"

import inicio from './pages/inicio'
import error from './pages/error'
import details from './details'

import Menu from './components/Menu'

function App() {

    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<inicio />} />
                <Route path="/products/:product" element={<details />} />
                <Route path="*" element={<error />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App