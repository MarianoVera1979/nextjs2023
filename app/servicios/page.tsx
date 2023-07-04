// Use Client le dice a Next que no use SSR, que va a renderizar el cliente
'use client';

import {useState} from "react"
import '../servicios/servicios.css';

export default function Servicios () {
    const [number, setNumber] = useState (0);   
    return(
        <div className="contenedor-servicios">
            <h1 className="Servicios">Estas en Servicios</h1>
            <p>Por ahora vamos: {number}</p>
            <button onClick={() => {setNumber(number + 1)}}>Sumar 1 al numero</button>
        </div>
    )
}