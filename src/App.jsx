import { BrowserRouter, Routes, Route } from "react-router-dom"

import Inicio from './pages/Inicio'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}


export default App