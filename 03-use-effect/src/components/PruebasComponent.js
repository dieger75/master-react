import React, {useEffect, useState} from 'react'

export const PruebasComponent = () => {
    //creando estado de Usuario con valor por defecto "Diego Geraldo"
    const [ usuario, setUsuario ] = useState("Diego Geraldo");
    //creando estado de fecha con valor inicial 01/01/1998
    const [ fecha, setFecha ] = useState("01/01/1998");
    const [ contador, setContador ] = useState(0)
    
    //función modUsuario que recoge el evento del campo de tezxto
    const modUdsuario = e => {
        /** {e.target} me devuelte la etiqueta input => <input type="text" placeholder="Cambia el nombre">*/
        console.log(e.target)
        /** {e.target.value} me devuelve el valor que existe dentro del input cada vez que existe un onChange (un cambio)*/
        console.log(e.target.value)
        /** setUsuario actualiza el valor de [usuario] para mostrarlo en pantalla */
        setUsuario(e.target.value)
    }
    const cambiarFecha = e => {
        /** este estado actualiza a la fecha actual */
        //setFecha(new Date().toLocaleDateString()) 
        setFecha(Date.now())
    }

    // Nada más cargar el componente que se ejecute un metodo
    // importar {useEffect} 
    // "() =>" funcion de callback o función anónima
    // Si queremos que se ejecute una sola vez al cargar el componente, habría que poner al final []
    useEffect( () => {
        console.log('has cargado el componente PruebasComponent!!')
    }, [])

    // Se ejecuta solo si cambio el usuario, para eso debo de declarar en corchetes la variable "usuario"
    useEffect( () => {
        setContador(contador + 1);
        console.log('has modificado el usuario: ' + contador)

    }, [fecha])

    return (
    <div>
        <h1>El efecto - Hook useEffect</h1>
        <strong className={ contador >= 10 ? 'label label-green' : 'label'}>{ usuario }</strong>
        <strong>{fecha}</strong>
        <p>
            {/** se crea un input tipo texto con una función onChange llamada "modUsuario" */}
           <input 
                type='text'
                onChange={ modUdsuario }
                placeholder='Cambia el nombre'
            />
            <button onClick={cambiarFecha}>Cambiar Fecha</button>
        </p>
        
    </div>
    )
}
