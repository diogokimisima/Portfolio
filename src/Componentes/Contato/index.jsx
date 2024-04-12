import './contato.css';
// import emailjs from 'email-js-com';
import { useState, useRef } from "react";


export default function Contato() {
    // const ref = useRef();
    // const [success, setSuccess] = useState(null);
    

    // // const handleSubmit = (e) => {
    // //     e.preventDefault();

    // //     emailjs
    // //         .sendForm(
    // //             "service_ubftdwf",
    // //             "template_5uc8aer",
    // //             ref.current,
    // //             "v269QHhYIa7uxQKJF"
    // //         )
    // //         .then(
    // //             (result) => {
    // //                 console.log(result.text);
    // //                 setSuccess(true);
    // //             },
    // //             (error) => {
    // //                 console.log(error.text);
    // //                 setSuccess(false);
    // //             }
    // //         );
    // // };

    return (
        <section id='contato' className='limitar-secao secao-contato'>
            <h4 className='subtitulo-contato'>Ficou interessado(a)?</h4>
            <h2 className='titulo-contato'>Entre em contato</h2>
            <div className='secao-form'>
                <form ref={ref} onSubmit={handleSubmit} action="" className='formulario'>
                    <input type="text" placeholder="Nome" name="name"></input>
                    <input type="email" placeholder="Email" name="email"></input>
                    <textarea placeholder="Mensagem" name="message" rows={7}></textarea>
                    <button type="submit">ENVIAR</button>
                    {success && 
                     "Mensagem enviada com sucesso! "}
                </form>
            </div >
        </section >
    )
}