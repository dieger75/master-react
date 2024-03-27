import React from 'react'

export const EventosComponentes = () => {

    //funcion vinvuladas a eventos. Se suele porner "handle"
    // handleClick()
    
    const hasDadoClick = (e) => {
        alert('Has dado clcik al botón!!')
    }
    const hasDadoClickParametros = (e, nombre) => {
        alert('Has dado clcik al botón!! ' + nombre)
    }
    function hasDadoDobleClick(e) {
        alert('Has dado doble clcik!!')
    }
    const hasEntrado = (e, accion) => {
        console.log(`Has ${accion} a la caja con el mouse`)
    }

    //Si solo se pasa un parámetro no hace falta los paréntesis, solo el evento "e"
    const estasDentro = e => {
        console.log("Estas dentro del input, escribe tu nombre");
    }

    const estasFuera = e => {
        console.log("Estas fuera del input, ¡CHAU!");
    }
    return (
        <div>
            <h1>Eventos de React</h1>
            {/** Evento click con función interna */}
            <p>
                <button onClick={ (e) => {
                    console.log(e)
                    console.log('Soy un evento click')
                }}>Dame click iterno</button>
            </p>

            {/** Evento click con función externa */}
            <p><button onClick={ hasDadoClick }>Dame click externo</button></p>

            {/** Evento click con función externa y parámetros */}
            <p><button onClick={ e=> hasDadoClickParametros(e, "Diego") }>Dame click parametro</button></p>

            {/** Evento click con función externa y parámetros */}
            <p><button onDoubleClick={ hasDadoDobleClick }>Dame doble click</button></p>
            
            {/** Evento onMouseEnter onMouseLeave */}
            <div id='caja'
                onMouseEnter={ e => hasEntrado(e, 'entrado') }
                onMouseLeave={ e => hasEntrado(e, 'salido')}
            >
                Pasa por encima
            </div>

            <p>
                <input type='text' 
                    onFocus={ estasDentro } 
                    onBlur={ estasFuera }
                    placeholder='Introduce tu nombre...' />
            </p>
        </div>
    )
}
