import './certificado.css';
import CertificadoReact from '../../img/certificadoReact.jpg';
// import CertificadoJavascript from '../../img/certificadoReact.JPG';

export default function Certificados () {
    return(
        <section id='certificados' className='limitar-secao secao-certificados'>
            <h2>Certificados</h2>
            <div className='card-certificado'>
                <img className='img-certificado' src={CertificadoReact} alt="certificado react" />
            </div>
        </section>
    )
}