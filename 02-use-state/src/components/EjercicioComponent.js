import React, {useState} from 'react';
import Proptypes from 'prop-types';

export const EjercicioComponent = ({year}) => {

    const [ yearNow, setYearNow ] = useState(year);
    const siguiente = e => {
        setYearNow(yearNow+1)
    }
    const anterior = e => {
        let operacion = yearNow - 1;
        setYearNow(operacion)
    }
    const cambiarYear = e => {
        let dato = parseInt(e.target.value);
        if(Number.isInteger(dato)) {
            setYearNow(dato)
        } else {
            setYearNow(year)
        }
    }

    return (
    <div>
        <h2>Ejercicio con Eventos y useState</h2>
        <strong className='label-green'>
            {yearNow}
        </strong>
        <p>
            <button onClick={ anterior }>ANTERIOR</button>
            &nbsp;
            <button onClick={ siguiente }>SIGUIENTE</button>
        </p>
        <p>Cambiar año
            &nbsp;
            <input 
                onChange={ cambiarYear }
                type='text'
                placeholder='Cambia el año'
            />
        </p>
    </div>
    )
}

EjercicioComponent.propTypes = {
    year: Proptypes.number.isRequired
}