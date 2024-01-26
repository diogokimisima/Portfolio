import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Projetos from '../Pages/Projetos';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/Projetos' element={<Projetos />}/>
            </Routes>
        </BrowserRouter>
    )
}
