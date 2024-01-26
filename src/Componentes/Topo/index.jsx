import './style.css';
import { Link } from 'react-router-dom';
 
export default function Topo() {
    return (
        <header>
            <div className='limitar-secao navbar'>
                <div className='nome-topo'>
                    DIOGO DEV
                </div>
                <nav>
                    <div className='links'>
                        <Link className='link-topo' to="/" >HOME</Link>
                        <Link className='link-topo' to="/Projetos">PROJETOS</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}