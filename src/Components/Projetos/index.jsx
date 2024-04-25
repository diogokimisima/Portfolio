import React, { useState } from 'react';
import ProjetoCard from './projetocard.jsx';
import './projeto.css';
import printPastelaria from '../../img/pastelariakina.jpg';
import printCardapio from '../../img/restaurante.jpg';
import printAgencia from '../../img/agencia.jpg';
import printLista from '../../img/print-lista.jpg';

export default function Projeto() {
    const [verMais, setVerMais] = useState(false);
    const [fraseBotao, setFraseBotao] = useState("Ver mais");

    const handleVerMaisClick = () => {
        if (verMais) {
            setVerMais(false);
            setFraseBotao('Ver mais');
        } else {
            setVerMais(true);
            setFraseBotao('Ver menos');
        }
    };

    return (
        <section id='projetos' className='limitar-secao secao-projetos'>
            <h4 className='titulo-projeto'>Hora de navegar em</h4>
            <h2 className='subtitulo-projeto'>Meus projetos</h2>
            <div className='secao-card-projetos'>
                <ProjetoCard
                    imagem={printPastelaria}
                    titulo='Pastelaria Kina'
                    descricao='O site da Pastelaria tem um design moderno e responsivo, o site oferece uma experiência imersiva aos usuários, tornando a exploração do menu e a descoberta sobre o restaurante algo agradável e intuitivo.'
                    tecnologias={['HTML', 'CSS', 'JS', 'REACT.JS']}
                    hospedagemLink='https://pastelariakina.com.br'
                    githubLink='https://github.com/diogokimisima/Pastelaria-Kina'
                />
                <ProjetoCard
                    imagem={printAgencia}
                    titulo='Agencia de Branding'
                    descricao='O site da Agência de Branding oferece uma navegação fluida e intuitiva através do seu portfólio de trabalhos, permitindo aos usuários explorarem os diversos projetos de branding com facilidade e prazer.'
                    tecnologias={['HTML', 'CSS', 'JS', 'REACT.JS']}
                    hospedagemLink='https://agencia-de-branding-lac.vercel.app'
                    githubLink='https://github.com/diogokimisima/Agencia-de-branding'
                />
                <ProjetoCard
                    imagem={printCardapio}
                    titulo='Cardapio Restaurante'
                    descricao='O site de cardápio oferece uma experiência imersiva e intuitiva, com design moderno e responsivo, tornando a exploração do menu do cardapio mais agradável para os usuários e clientes.'
                    tecnologias={['HTML', 'CSS', 'JS', 'REACT.JS']}
                    hospedagemLink='https://cardapio-restaurante-ten.vercel.app'
                    githubLink='https://github.com/diogokimisima/Cardapio-Restaurante'
                />
                {/* Se desejar, adicione mais ProjetoCard para outros projetos */}
            </div>

            <div className='secao-projeto-ver-mais'>
                {verMais && (
                    <div className='secao-card-projetos'>
                        <ProjetoCard
                            imagem={printLista}
                            titulo='Lista de Participantes'
                            descricao='O site projeto Lista de Participantes de Evento, uma aplicação front-end em ReactJS. Esta aplicação permite listar participantes de um evento, realizar buscas, navegar pelas páginas da lista e visualizar detalhes de cada participantes.'
                            tecnologias={['REACT.JS', 'TYPESCRIPT', 'TAILWIND']}
                            hospedagemLink='https://lista-participantes-evento.vercel.app'
                            githubLink='https://github.com/diogokimisima/Lista-participantes-evento'
                        />
                        {/* Adicione mais ProjetoCards aqui, se necessário */}
                    </div>
                )}
            </div>

            <div className='secao-botao-ver'>
                <button className='botao-ver' onClick={handleVerMaisClick}>{fraseBotao}</button>
            </div>
        </section>
    );
}
