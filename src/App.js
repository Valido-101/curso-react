import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master de react
        </p>

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
