import React from 'react'

export const TercerComponente2 = (props) => {

    console.log(props)

    return (
         <div>
            <h1>Comunicación entre componentes</h1>
            <h2>Tercer componente con PROPS</h2>            
            <ul>
                <li>{props.nombre}</li>
                <li>{props.apellidos}</li>
                <li>{props.ficha.altura}</li>
                <li>{props.ficha.grupo}</li>
                <li>{props.ficha.estado}</li>
            </ul>
        </div>
    )
}