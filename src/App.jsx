import './App.css';
import Topo from "./Components/Topo";
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import Skills from './Components/Skills';
import Rodape from './Components/Rodape';
import Projeto from './Components/Projetos';
import Contato from './Components/Contato';
import Certificados from './Components/Certificados';


function App() {
  return (
    <div className="App">
      <Topo/>
      <Home/>
      <Sobre />
      <Skills/>
      <Projeto />
      <Contato />
      <Certificados />
      <Rodape />
      
    </div>
  );
}

export default App;
