import React from 'react'
import { useState } from 'react';

export const MiPrimerEstado = () => {


    /*
    // Esto no funciona porque hay que usar useState
    // un botón donde al darle click cambia el nombre
    let nombre = "Diego Geraldo";
    const cambiarNombre = e => {
        nombre = "Paquito"
    } 

    return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong>
            { nombre }
        </strong>
        &nbsp;
        <button onClick={ cambiarNombre }>Cambiar</button>
    </div>
    )*/
    
    // el hook useState se caracteriza porque va a tener 2 partes:
    // 1.- la variable que va a guardar el dato del estado
    // 2.- la función que va ha permitirme acceder a ese estado y modificarlo
    // desestructuración [ variable, funcion ]
    // Las funciones de un estado por convencion se llaman setNombredelavariable

    const [ nombre, setNombre] = useState("Diego Geraldo");
    const [ nombre2, setNombre2] = useState("Diego Geraldo");

    const cambiarNombre = e => {
        setNombre("Francisco")
    }
    const cambiarNombre2 = (e, nombreFijo) => {
        setNombre2(nombreFijo)
    }
    return (
        <div>
            {/** estado cambiar nombre */}
            <h3>Componente: MiPrimerEstado</h3>
            <strong>
                { nombre }
            </strong>
            &nbsp;
            <button onClick={ cambiarNombre }>Cambiar</button>
            <hr />
            {/** estado con parametros */}
            <h3>Componente: MiPrimerEstado - Con parametros y cambio en input</h3>
            {/** cambia la clase de estilo según longitud del nombre */}
            <strong className={'label ' + (nombre2.length <= 4 ? 'verde' : 'rojo')}>
                { nombre2 }
            </strong>
            &nbsp;
            <button onClick={ e=> cambiarNombre2(e,"Paquito") }>Cambiar nombre a Paquito</button>
            {/** 
             * estado onKeyUp : cada vez que levante el dedo de una tecla se verá reflejado 
             * puede usarse onChange
            */}
            &nbsp;
            <input type='text' onKeyUp={ e => cambiarNombre2( e, e.target.value)} placeholder='Cambia el nombre' />
            <hr />
        </div>
    )
}
