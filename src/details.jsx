import { useParams } from "react-router-dom";

function details(){
let {product}= useParams()

return(
    <h1>Hola soy el detalle del producto {product}</h1>
)
}

export default details