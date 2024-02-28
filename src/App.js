import './App.css';
import Topo from "./Componentes/Topo";
import Home from './Componentes/Home';
import Sobre from './Componentes/Sobre';
import Rodape from './Componentes/Rodape';

function App() {
  return (
    <div className="App">
      <Topo />
      <Home />
      <Sobre />
      <Rodape />
    </div>
  );
}

export default App;
