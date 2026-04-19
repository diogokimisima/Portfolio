import './sobre.css';

export default function Sobre() {
    return (
        <section className='limitar-secao secao-sobre'>
            <div className="sobre-ilustracao">
                <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Monitor */}
                    <rect x="40" y="60" width="240" height="160" rx="12" fill="#1a1a2e" stroke="#6932f5" strokeWidth="2"/>
                    <rect x="55" y="75" width="210" height="130" rx="6" fill="#0f0f1a"/>
                    {/* Stand */}
                    <rect x="140" y="220" width="40" height="24" rx="4" fill="#1a1a2e" stroke="#6932f5" strokeWidth="2"/>
                    <rect x="110" y="244" width="100" height="6" rx="3" fill="#6932f5"/>

                    {/* Code lines */}
                    <rect x="72" y="96" width="50" height="5" rx="2.5" fill="#6932f5" opacity="0.9"/>
                    <rect x="130" y="96" width="35" height="5" rx="2.5" fill="#a78bfa" opacity="0.6"/>

                    <rect x="80" y="112" width="70" height="5" rx="2.5" fill="#a78bfa" opacity="0.5"/>
                    <rect x="158" y="112" width="40" height="5" rx="2.5" fill="#6932f5" opacity="0.7"/>

                    <rect x="80" y="128" width="55" height="5" rx="2.5" fill="#a78bfa" opacity="0.4"/>
                    <rect x="143" y="128" width="25" height="5" rx="2.5" fill="#6932f5" opacity="0.6"/>

                    <rect x="72" y="144" width="80" height="5" rx="2.5" fill="#6932f5" opacity="0.8"/>

                    <rect x="80" y="160" width="45" height="5" rx="2.5" fill="#a78bfa" opacity="0.5"/>
                    <rect x="133" y="160" width="60" height="5" rx="2.5" fill="#6932f5" opacity="0.5"/>

                    <rect x="80" y="176" width="30" height="5" rx="2.5" fill="#a78bfa" opacity="0.3"/>

                    {/* Cursor blink */}
                    <rect x="72" y="176" width="3" height="14" rx="1.5" fill="#6932f5">
                        <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite"/>
                    </rect>

                    {/* Floating brackets */}
                    <text x="270" y="90" fontSize="28" fill="#6932f5" opacity="0.25" fontFamily="monospace">{"{"}</text>
                    <text x="18" y="200" fontSize="28" fill="#6932f5" opacity="0.2" fontFamily="monospace">{"}"}</text>
                    <text x="18" y="90" fontSize="22" fill="#a78bfa" opacity="0.15" fontFamily="monospace">{"<>"}</text>
                </svg>
            </div>
            <article className="sobre-descricao">
                <h4>Quem sou eu?</h4>
                <h2>Diogo kimisima,</h2>
                <h2>desenvolvedor Full-Stack.</h2>
                <p id='skills'>Formado em Análise e Desenvolvimento de Sistemas (ADS) e pós-graduado em Golang pela Full Cycle — GoExpert, com foco em microsserviços, concorrência e performance. Constantemente busco aprimorar minhas habilidades através do desenvolvimento de projetos pessoais, visando expandir meu conhecimento e experiência. Atuo como desenvolvedor Web Full-stack</p>
            </article>
        </section>
    )
}
