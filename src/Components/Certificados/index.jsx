import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './certificado.css';
import CertificadoNlw from '../../img/certificadoNlw.jpg';
import CertificadoReact from '../../img/certificadoReact.jpg';

import './certificado.css';

export default function Certificados() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <section id='certificados' className='limitar-secao secao-certificados'>
            <h2 className='titulo-certificado'>Certificados</h2>
            <div className='card-certificado'>
                <Slider {...settings}>
                    <div>
                        <img className='img-certificado' src={CertificadoNlw} alt="certificado react" />
                    </div>
                    <div>
                        <img className='img-certificado' src={CertificadoReact} alt="certificado react" />
                    </div>
                </Slider>
            </div>
        </section>
    );
};
