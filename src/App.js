import './App.css';
import Topo from "./Componentes/Topo";
import Home from './Componentes/Home';
import Sobre from './Componentes/Sobre';
import Skills from './Componentes/Skills';
import Rodape from './Componentes/Rodape';

function App() {
  return (
    <div className="App">
      <Topo />
      <Home />
      <Sobre />
      <Skills/>
      <Rodape />
    </div>
  );
}

export default App;
