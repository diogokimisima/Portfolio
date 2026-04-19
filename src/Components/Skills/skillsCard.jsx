const SkillsCard = ({ icon, descricao, tecnologias }) => {
    return (
        <article className='card-skills'>
            <div className='descricao-skills'>
                <div className='icon-descricao'>{icon}</div>
                <h3 className='titulo-descricao'>{descricao}</h3>
                {tecnologias.map(tecnologia => (
                    <p className='paragrafo-descricao' key={tecnologia}> {tecnologia} </p>
                ))}
            </div>
        </article>
    )
}

export default SkillsCard;
