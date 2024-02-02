import './home.css';
import fotoBanner from '../../img/FotoBanner.jpg';

export default function Home() {
    return (
        <section className='limitar-secao'>
            <div className='secao-home'>
                <div className='descricao-home'>
                    <h1>Seja bem vindo!</h1>
                    <h2>Meu nome é Diogo</h2>
                    <span className='span'>| Desenevolvedor FrontEnd</span>
                    <div className='secao-link'>
                        <a className='link'><img src="" alt="curriculo"/>Currículo</a>
                        <a className='link'><img src="" alt="perfil"/>Meu Perfil</a>
                    </div>
                    
                </div>
                <div className='banner-home'>
                    <img src={fotoBanner} alt="imagem"/>

                </div>
            </div>

        </section>
    )
}