import React from 'react';
import '../PaginaFrontEnd/style.css';
import BotaoVoltar from '../BotaoVoltar';


function PaginaFrontEnd () {
    return (
        <section>
            <h1>React.js</h1>
            <div>
            <p>React é uma bibliotéca JavaScript para criação de interfaces de usuário, e nesse contexto, uma das tecnologias mais utilizadas pelo mercado. No guia abaixo você aprenderá quais os pré-requisitos para iniciar no React do jeito certo e como criar as suas primeiras SPAs com ela.</p>

            </div>
            <a href="https://www.devmedia.com.br/react/">Guia de React</a>
            <BotaoVoltar />
        </section>
    );
}

export default PaginaFrontEnd