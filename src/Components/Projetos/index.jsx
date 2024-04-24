import React, { useState } from 'react';

import './projeto.css';

import printPastelaria from '../../img/pastelariakina.jpg';
import printCardapio from '../../img/restaurante.jpg';
import printAgencia from '../../img/agencia.jpg';
import printLista from '../../img/print-lista.jpg';
import iconeGithub from '../../img/icone-github.png';


export default function Projeto() {
    const [verMais, setVerMais] = useState(false);
    const [fraseBotao, setFraseBotao] = useState("Ver mais")

    const handleVerMaisClick = () => {
        if (verMais) {
            setVerMais(false);
            setFraseBotao('Ver mais')
        } else {
            setVerMais(true);
            setFraseBotao('Ver menos')
        }
    };

    return (
        <section id='projetos' className='limitar-secao secao-projetos'>
            <h4 className='titulo-projeto'>Hora de navegar em</h4>
            <h2 className='subtitulo-projeto'>Meus projetos</h2>
            <div className='secao-card-projetos'>
                <div className='card-projetos'>
                    <img className='print-card' src={printPastelaria} alt="foto-projeto1" />
                    <div className='descricao-projeto'>
                        <h3 className='subtitulo-descricao'>Pastelaria Kina</h3>
                        <p className='paragrafo-descricao-projetos'>O site da Pastelaria tem um design moderno e responsivo, o site oferece uma experiência imersiva aos usuários, tornando a exploração do menu e a descoberta sobre o restaurante algo agradável e intuitivo.</p>
                        <div className='secao-tecnologias'>
                            <p className='tecnologias'>HTML</p>
                            <p className='tecnologias'>CSS</p>
                            <p className='tecnologias'>JS</p>
                            <p className='tecnologias'>REACT.JS</p>
                        </div>
                        <nav className='link-projetos'>
                            <a className='link-hospedagem' href='https://pastelariakina.com.br' target='blank'>Ver projeto</a>
                            <a href='https://github.com/diogokimisima/Pastelaria-Kina' ><img className='icone-github' src={iconeGithub} alt="iconegithub" target='blank' /></a>
                        </nav>
                    </div>
                </div>
                <div className='card-projetos'>
                    <img className='print-card' src={printAgencia} alt="foto-projeto2" />
                    <div className='descricao-projeto'>
                        <h3 className='subtitulo-descricao'>Agencia de Branding</h3>
                        <p className='paragrafo-descricao-projetos'>O site da Agência de Branding oferece uma navegação fluida e intuitiva através do seu portfólio de trabalhos, permitindo aos usuários explorarem os diversos projetos de branding com facilidade e prazer.</p>
                        <div className='secao-tecnologias'>
                            <p className='tecnologias'>HTML</p>
                            <p className='tecnologias'>CSS</p>
                            <p className='tecnologias'>JS</p>
                            <p className='tecnologias'>REACT.JS</p>
                        </div>
                        <nav className='link-projetos'>
                            <a className='link-hospedagem' href='https://agencia-de-branding-lac.vercel.app' target='blank'>Ver projeto</a>
                            <a href='https://github.com/diogokimisima/Agencia-de-branding' target='blank'><img className='icone-github' src={iconeGithub} alt="iconegithub" /></a>
                        </nav>
                    </div>
                </div>
                <div className='card-projetos'>
                    <img className='print-card' src={printCardapio} alt="foto-projeto3" />
                    <div className='descricao-projeto'>
                        <h3 className='subtitulo-descricao'>Cardapio Restaurante</h3>
                        <p className='paragrafo-descricao-projetos'>O site de cardápio oferece uma experiência imersiva e intuitiva, com design moderno e responsivo, tornando a exploração do menu do cardapio mais agradável para os usuários e clientes.</p>
                        <div className='secao-tecnologias'>
                            <p className='tecnologias'>HTML</p>
                            <p className='tecnologias'>CSS</p>
                            <p className='tecnologias'>JS</p>
                            <p className='tecnologias'>REACT.JS</p>
                        </div>
                        <nav id='contato' className='link-projetos'>
                            <a className='link-hospedagem' href='https://cardapio-restaurante-ten.vercel.app' target='blank'>Ver projeto</a>
                            <a className='link-codigo' href='https://github.com/diogokimisima/Cardapio-Restaurante' target='blank'><img className='icone-github' src={iconeGithub} alt="iconegithub" /></a>
                        </nav>
                    </div>
                </div>

            </div>

            <div className='secao-projeto-ver-mais'>
                {verMais && (
                    <div className='secao-card-projetos'>
                        <div className='card-projetos'>
                            <img className='print-card' src={printLista} alt="foto-projeto4" />
                            <div className='descricao-projeto'>
                                <h3 className='subtitulo-descricao'>Lista de Participantes</h3>
                                <p className='paragrafo-descricao-projetos'>O site projeto Lista de Participantes de Evento, uma aplicação front-end em ReactJS. Esta aplicação permite listar participantes de um evento, realizar buscas, navegar pelas páginas da lista e visualizar detalhes de cada participantes. </p>
                                <div className='secao-tecnologias'>
                                    <p className='tecnologias'>REACT.JS</p>
                                    <p className='tecnologias'>TYPESCRIPT</p>
                                    <p className='tecnologias'>TAILWIND</p>
                                    
                                </div>
                                <nav id='contato' className='link-projetos'>
                                    <a className='link-hospedagem' href='https://lista-participantes-evento.vercel.app' target='blank'>Ver projeto</a>
                                    <a className='link-codigo' href='https://github.com/diogokimisima/Lista-participantes-evento' target='blank'><img className='icone-github' src={iconeGithub} alt="iconegithub" /></a>
                                </nav>
                            </div>
                        </div>
                    </div>
                )}
            </div>


            <div className='secao-botao-ver'>
                <button className='botao-ver' onClick={handleVerMaisClick}>{fraseBotao}</button>
            </div>




        </section>
    );
}
