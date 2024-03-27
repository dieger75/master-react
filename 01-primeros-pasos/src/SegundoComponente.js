import React from 'react'

export const SegundoComponente = () => {

    const libros = ["Harry Potter", "Juego de Tronos", "Clean Code"];
    //const libros = [];

    return (
        <div className='segundo-componente'>
            <h1>Listado de Libros</h1>
            <h2>Segundo componente</h2>
            {libros.length >= 1 ?
            //poner paréntesis cuando son muchas líneas para que JSX lo interprete mejor
                (<ul>
                    {
                        libros.map((libro, indice) => {
                            return <li key={indice}>{libro}</li>
                        })
                    }
                </ul>)
            :
                (<p>No hay libros</p>)
            }
        </div>
  )
}
