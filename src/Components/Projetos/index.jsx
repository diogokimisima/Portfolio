import React, { useState } from 'react';
import ProjetoCard from './projetocard.jsx';
import './projeto.css';

import printPastelaria from '../../img/pastelariakina.jpg';
import printCardapio from '../../img/restaurante.jpg';
import printFood from '../../img/print-food.jpg';
import printFinance from '../../img/print-finance.jpg';
import printCatalogo from '../../img/print-catalogo.jpg';
import printNotes from '../../img/print-notes.png';

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
                    imagem={printFinance}
                    titulo='Finance.ai'
                    descricao='Finance.ai é uma plataforma de gerenciamento financeiro que gera relatórios detalhados sobre transações, com um painel interativo e a opção de adicionar novas movimentações. Também permite fazer upgrade para planos premium via Stripe.'
                    tecnologias={['Next', 'Tailwind', 'Prisma', 'Typescript', 'Stripe', 'GPT-3 API', 'Postgres']}
                    githubLink='https://github.com/diogokimisima/finance-ia'
                />
                <ProjetoCard
                    imagem={printCatalogo}
                    titulo='Catalogo Link'
                    descricao='CatalogoLink é uma plataforma de catálogo de produtos otimizada para dispositivos móveis, com filtros e buscas simples. Permite adicionar itens aos favoritos e ao carrinho, e finalizar a compra via WhatsApp.'
                    tecnologias={['Vue', 'Vuex', 'Tailwind',]}
                    hospedagemLink='https://novo-catalogo-link-trovata3.vercel.app/'
                    githubLink='https://github.com/diogokimisima/CatalogoLink3'
                />
                <ProjetoCard
                    imagem={printNotes}
                    titulo='Virtual Notes'
                    descricao='O Virtual Notes é uma aplicação para gerenciar anotações de forma simples e eficiente, com foco em usabilidade. É totalmente responsiva, permitindo que você organize suas notas de maneira rápida e prática.'
                    tecnologias={['React.js', 'SQLite', 'Node.js', 'Styled Components']}
                    hospedagemLink='https://virtual-notes.vercel.app'
                    githubLink='https://github.com/diogokimisima/frontend-notes'
                />
            </div>

            <div className='secao-projeto-ver-mais'>
                {verMais && (
                    <div className='secao-card-projetos'>
                        <ProjetoCard
                            imagem={printPastelaria}
                            titulo='Pastelaria Kina'
                            descricao='O site da Pastelaria Kina oferece uma experiência visual moderna e intuitiva. A navegação pelo menu e as informações sobre o restaurante são fáceis e agradáveis, tanto para novos visitantes quanto para clientes frequentes.'
                            tecnologias={['HTML', 'CSS', 'JS', 'REACT.JS']}
                            hospedagemLink='https://pastelariakina.com.br'
                            githubLink='https://github.com/diogokimisima/Pastelaria-Kina'
                        />
                        <ProjetoCard
                            imagem={printFood}
                            titulo='Food Explorer'
                            descricao='O site de cardápio traz um design moderno e intuitivo, permitindo que os usuários explorem facilmente o menu do restaurante de forma agradável e visualmente atraente.'
                            tecnologias={['REACT.JS', 'Tailwind']}
                            hospedagemLink='https://restaurant-food-explorer.vercel.app/'
                            githubLink='https://github.com/diogokimisima/food-explorer'
                        />
                        <ProjetoCard
                            imagem={printCardapio}
                            titulo='Cardapio Restaurante'
                            descricao='Outro projeto de cardápio online com um design simples e fluído, facilitando a visualização do menu e tornando a experiência de navegação mais interativa.'
                            tecnologias={['HTML', 'CSS', 'JS', 'REACT.JS']}
                            hospedagemLink='https://cardapio-restaurante-ten.vercel.app'
                            githubLink='https://github.com/diogokimisima/Cardapio-Restaurante'
                        />
                    </div>
                )}
            </div>

            <div className='secao-botao-ver'>
                <button className='botao-ver' onClick={handleVerMaisClick}>{fraseBotao}</button>
            </div>
        </section>

    );
}
