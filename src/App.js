import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import TercerComponente from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {

  const ficha_medica ={
    altura: "187cm",
    grupo: "H+",
    estado: "Bueno",
    alergias: "Ninguna"
  }

  var numero = 3;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master de react
        </p>
        <div className='componentes'>
          <hr/>
          <EventosComponente/>
          <hr/>
          <TercerComponente nombre="Jesús" apellidos="Valido Zafra" ficha={ficha_medica}/>
          <hr/>
          {/*Cargar mi primer componente*/}
          <SegundoComponente/>
          <hr/>
          <MiComponente/>
        </div>
      </header>
    </div>
  );
}

export default App;
