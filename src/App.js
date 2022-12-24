import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import TercerComponente from './TercerComponente';

function App() {

  const ficha_medica ={
    altura: "187cm",
    grupo: "H+",
    estado: "Bueno",
    alergias: "Ninguna"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master de react
        </p>

        <hr/>
        <TercerComponente nombre="Jesús" apellidos="Valido Zafra" ficha={ficha_medica}/>
        <hr/>
        {/*Cargar mi primer componente*/}
        <SegundoComponente/>
        <hr/>
        <MiComponente/>
      </header>
    </div>
  );
}

export default App;
