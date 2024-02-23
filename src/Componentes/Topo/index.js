import './topo.css';
 
export default function Topo() {
    return (
        <header>
            <div className='limitar-secao navbar'>
                <div className='nome-topo'>
                    <h1>Diogo kimisima</h1>
                    <h2>Front-End Developer</h2>
                </div>
                <nav>
                    <div>
                        <a href='/' className='link-topo' to="/" >Home</a>
                        <a href='/' className='link-topo' to="/Sobre">Sobre</a>
                        <a href='/' className='link-topo' to="/Sobre">Skills</a>
                        <a href='/' className='link-topo' to="/Projetos">Educação</a>
                        <a href='/' className='link-topo' to="/Projetos">Projetos</a>
                        <a href='/' className='link-topo' to="/Projetos">Contato</a>

                        
                    </div>
                </nav>
            </div>
        </header>
    )
}