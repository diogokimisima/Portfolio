import './topo.css';
 
export default function Topo() {
    return (
        <header>
            <div className='limitar-secao navbar'>
                <div className='nome-topo'>
                    DIOGO DEV
                </div>
                <nav>
                    <div>
                        <a href='/' className='link-topo' to="/" >HOME</a>
                        <a href='/' className='link-topo' to="/Projetos">PROJETOS</a>
                        <a href='/' className='link-topo' to="/Sobre">SOBRE</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}