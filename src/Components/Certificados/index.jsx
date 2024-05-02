import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CertificadoCards from './certificadoCards';
import './certificado.css';

import CertificadoNlw from '../../img/certificadoNlw.jpg';
import CertificadoReact from '../../img/certificadoReact.jpg';
import CertificadoJavaScript from '../../img/certificadoJavascript.jpg';

export default function Certificados() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <section id='certificados' className='limitar-secao secao-certificados'>
            <h2 className='titulo-certificado'>Certificados</h2>
            <div className='card-certificado'>
                <Slider {...settings}>
                    <CertificadoCards img={CertificadoNlw}/>
                    <CertificadoCards img={CertificadoReact}/>
                    <CertificadoCards img={CertificadoJavaScript}/>
                </Slider>
            </div>
        </section>
    );
};
