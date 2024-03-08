import './App.css';
import Topo from "./Componentes/Topo";
import Home from './Componentes/Home';
import Sobre from './Componentes/Sobre';
import Skills from './Componentes/Skills';
import Rodape from './Componentes/Rodape';
import Projeto from './Componentes/Projetos';
import Contato from './Componentes/Contato';

function App() {
  return (
    <div className="App">
      <Topo/>
      <Home/>
      <Sobre />
      <Skills/>
      <Projeto />
      <Contato />
      <Rodape />
      
    </div>
  );
}

export default App;
