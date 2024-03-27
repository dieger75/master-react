import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { TercerComponente2 } from './TercerComponente2';
import { EventosComponentes } from './EventosComponentes';

function App() {
    const ficha_medica = {
        altura : "175cm",
        grupo : "H+",
        estado : "Bueno",
        alergias : "Ninguna"
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {/* Edit <code>src/App.js</code> and save to reload. */}
                    Bienvenido al master de React
                </p>

                {/* Cargar mi primer componente */}
                <div className='componentes'>
                    <hr/>
                    <EventosComponentes></EventosComponentes>
                    <hr/>
                    <TercerComponente 
                        nombre = "Diego"
                        apellidos = "Geraldo"
                        ficha = {ficha_medica}
                    />
                    <hr/>
                    <TercerComponente2 
                        nombre = "Diego"
                        apellidos = "Geraldo"
                        ficha = {ficha_medica}
                    />
                    <hr/>
                    <SegundoComponente />
                    <hr/>
                    <MiComponente />
                    
                </div>
                
            </header>
        </div>
    );
}

export default App;
