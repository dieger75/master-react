import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { EjercicioComponent } from './components/EjercicioComponent';

function App() {
  const fecha = new Date();
  const yearAcual = fecha.getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El estado de React - Hook useState</h1>
        <MiPrimerEstado />
        <EjercicioComponent year= { yearAcual } />
      </header>
    </div>
  );
}

export default App;
