import './topo.css';
 
export default function Topo() {
    return (
        <header>
            <div className='limitar-secao navbar'>
                <div className='nome-topo'>
                    <a className='link-nome' href='#home'><h1>Diogo<span>.dev</span></h1></a>
                </div>
                <nav>
                    <div>
                        <a href='#home' className='link-topo link-home' to="/" >Home</a>
                        <a href='#sobre' className='link-topo' to="/Sobre">Sobre</a>
                        <a href='#skills' className='link-topo' to="/Skills">Skills</a>
                        <a href='#projetos' className='link-topo' to="/Projetos">Projetos</a>
                        <a href='#contato' className='link-topo' to="/Projetos">Contato</a>
                        <a href='#certificados' className='link-topo' to="/Certificados">Certificados</a>
                        
                    </div>
                </nav>
            </div>
        </header>
    )
}