import './skills.css';
import SkillsCard from './skillsCard';

const IconFrontEnd = () => (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="14" width="36" height="24" rx="3" stroke="#6932f5" strokeWidth="1.8"/>
        <line x1="10" y1="21" x2="46" y2="21" stroke="#6932f5" strokeWidth="1.8"/>
        <circle cx="15" cy="17.5" r="1.5" fill="#6932f5" opacity="0.5"/>
        <circle cx="20" cy="17.5" r="1.5" fill="#6932f5" opacity="0.5"/>
        <circle cx="25" cy="17.5" r="1.5" fill="#6932f5" opacity="0.5"/>
        <path d="M21 30L18 33L21 36" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 28L25 36" stroke="#6932f5" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M31 30L34 33L31 36" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="22" y="38" width="12" height="3" rx="1.5" fill="#6932f5" opacity="0.4"/>
        <rect x="18" y="41" width="20" height="2" rx="1" fill="#6932f5" opacity="0.3"/>
    </svg>
);

const IconBackEnd = () => (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="12" width="32" height="9" rx="3" stroke="#6932f5" strokeWidth="1.8"/>
        <rect x="12" y="24" width="32" height="9" rx="3" stroke="#6932f5" strokeWidth="1.8"/>
        <rect x="12" y="36" width="32" height="9" rx="3" stroke="#6932f5" strokeWidth="1.8"/>
        <circle cx="38" cy="16.5" r="2" fill="#6932f5" opacity="0.8"/>
        <circle cx="38" cy="28.5" r="2" fill="#a78bfa" opacity="0.6"/>
        <circle cx="38" cy="40.5" r="2" fill="#6932f5" opacity="0.4"/>
        <line x1="17" y1="16.5" x2="30" y2="16.5" stroke="#a78bfa" strokeWidth="1.4" strokeLinecap="round" opacity="0.5"/>
        <line x1="17" y1="28.5" x2="27" y2="28.5" stroke="#a78bfa" strokeWidth="1.4" strokeLinecap="round" opacity="0.5"/>
        <line x1="17" y1="40.5" x2="24" y2="40.5" stroke="#a78bfa" strokeWidth="1.4" strokeLinecap="round" opacity="0.5"/>
    </svg>
);

const IconFerramentas = () => (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Terminal window */}
        <rect x="8" y="12" width="40" height="32" rx="4" stroke="#6932f5" strokeWidth="1.8"/>
        <line x1="8" y1="20" x2="48" y2="20" stroke="#6932f5" strokeWidth="1.8"/>
        <circle cx="14" cy="16" r="1.5" fill="#6932f5" opacity="0.5"/>
        <circle cx="20" cy="16" r="1.5" fill="#6932f5" opacity="0.5"/>
        <circle cx="26" cy="16" r="1.5" fill="#6932f5" opacity="0.5"/>
        {/* Prompt */}
        <path d="M14 29L19 33L14 37" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="22" y1="37" x2="34" y2="37" stroke="#6932f5" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
        {/* Git branch lines */}
        <rect x="16" y="47" width="24" height="4" rx="2" fill="#6932f5" opacity="0.25"/>
        <line x1="28" y1="44" x2="28" y2="47" stroke="#6932f5" strokeWidth="1.6" strokeLinecap="round" opacity="0.4"/>
    </svg>
);

export default function Skills() {
    return (
        <section className='limitar-secao secao-skills'>
            <h4>Tecnologias</h4>
            <h2>Minhas Skills</h2>
            <div className='secao-card-skills'>
                <SkillsCard
                    icon={<IconFrontEnd />}
                    descricao='Front-End'
                    tecnologias={['Next.js, React.js, Vue.js, Tailwind CSS, Styled Components']}
                />

                <SkillsCard
                    icon={<IconBackEnd />}
                    descricao='Back-end'
                    tecnologias={['Node.js, TypeScript, Fastify, PHP, Laravel, Go (Golang), SQL.']}
                />

                <SkillsCard
                    icon={<IconFerramentas />}
                    descricao='Ferramentas/Plataformas'
                    tecnologias={['Git, Docker, Kubernetes, GitOps (ArgoCD), CI/CD, RabbitMQ, Kafka, gRPC e Figma.']}
                />
            </div>
        </section>
    )
}
