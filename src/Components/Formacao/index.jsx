import './formacao.css';

const modulosGoExpert = [
    'Foundation & Golang Internals',
    'Concorrência e Multithreading',
    'Desenvolvimento de APIs',
    'Go e Clean Architecture',
    'gRPC, GraphQL & RabbitMQ',
    'Testes Automatizados',
    'Bancos de Dados & SQLC',
    'Deploy com Docker & Kubernetes',
    'SOLID',
    'Pacote Context',
];

export default function Formacao() {
    return (
        <section id='formacao' className='limitar-secao secao-formacao'>
            <h4 className='formacao-subtitulo'>Minha trajetória</h4>
            <h2 className='formacao-titulo'>Formação Acadêmica</h2>

            <div className='formacao-cards'>

                <div className='formacao-card'>
                    <div className='formacao-card-header'>
                        <div className='formacao-icone'>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="#6932F5"/>
                                <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="#6932F5" opacity="0.6"/>
                            </svg>
                        </div>
                        <div>
                            <h3>Análise e Desenvolvimento de Sistemas</h3>
                            <span className='formacao-instituicao'>Graduação • 2023 – 2025</span>
                        </div>
                    </div>
                    <p className='formacao-descricao'>
                        Curso superior tecnológico com foco em desenvolvimento de software, estruturas de dados, banco de dados, engenharia de software e arquitetura de sistemas.
                    </p>
                    <div className='formacao-badge-grupo'>
                        <span className='formacao-badge'>3 anos</span>
                        <span className='formacao-badge'>Tecnólogo</span>
                    </div>
                </div>

                <div className='formacao-card formacao-card-destaque'>
                    <div className='formacao-card-header'>
                        <div className='formacao-icone'>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" fill="#6932F5"/>
                            </svg>
                        </div>
                        <div>
                            <h3>Pós-Graduação GoExpert</h3>
                            <span className='formacao-instituicao'>Full Cycle • Jun – Dez 2025</span>
                        </div>
                    </div>
                    <p className='formacao-descricao'>
                        Especialização intensiva em Golang com foco em microsserviços, concorrência, performance e arquitetura limpa.
                    </p>
                    <ul className='formacao-modulos'>
                        {modulosGoExpert.map((modulo) => (
                            <li key={modulo}>
                                <span className='formacao-dot'></span>
                                {modulo}
                            </li>
                        ))}
                    </ul>
                    <div className='formacao-badge-grupo'>
                        <span className='formacao-badge'>6 meses</span>
                        <span className='formacao-badge'>Pós-Graduação</span>
                        <span className='formacao-badge'>Golang</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
