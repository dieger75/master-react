//importar modulos de react / dependencias
import React, { Fragment } from "react";

//función del comnponente
// function MiComponente() {}
const MiComponente = () => {

    /*let nombre = "Diego";
    let web = "diegogeraldo.com";*/

    let usuario = {
        nombre: "Diego",
        apellidos: "Gerlado",
        web: "diegogeraldo.com"
    }

    return (
        
        //utilizando un DIV se tiene más control del componente o conjunto de elementos
        <div className="mi-componente">
            <h2>Componente creado</h2>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: <strong>{usuario.nombre}</strong></li>
                <li>Apellidos: <strong>{usuario.apellidos}</strong></li>
                <li>Web: <strong>{usuario.web}</strong></li>
            </ul>
            <p>Es es mi primer componente</p>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
            </ul>
        </div>

        //fragmento de código sin etiquetas dentro para poder ejecutar más elementos dentro de una caja
        /*<>
            <hr/>
            <h2>Componente creado</h2>
            <p>Es es mi primer componente</p>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
            </ul>
        </>*/

        //Importando el objeto FRAGMENT de react
        /*<Fragment>
            <hr/>
            <h2>Componente creado</h2>
            <p>Es es mi primer componente</p>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
            </ul>
        </Fragment>*/
    )
};

//Export
export default MiComponente;