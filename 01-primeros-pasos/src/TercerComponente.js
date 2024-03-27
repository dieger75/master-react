import React from 'react';
import PropTypes from "prop-types";

export const TercerComponente = ({nombre, apellidos, ficha}) => {

    return (
        <div>
            <h1>Comunicación entre componentes</h1>
            <h2>Tercer componente</h2>            
            <ul>
                <li>{nombre}</li>
                <li>{apellidos}</li>
                <li>{ficha.altura}</li>
                <li>{ficha.grupo}</li>
                <li>{ficha.estado}</li>
            </ul>
        </div>
    )
}

//Para hacer esto hay que declarar el import PropTypes
TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired, //dato requerido "isRequired"
    apelllidos: PropTypes.string.isRequired,
    ficha: PropTypes.object
}

//Props por defecto por si no se pasan paramentros
TercerComponente.defaultProps = {
    nombre: "Dieguito",
    apellidos: "Calderón"
}