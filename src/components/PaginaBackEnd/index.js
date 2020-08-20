import React from 'react';
import '../PaginaBackEnd/style.css';
import BotaoVoltar from '../BotaoVoltar';
import { Link } from 'react-router-dom';

function PaginaBackEnd (){
    return (
        <section>
            <h1>Node.js</h1>
            <div className="retangulo">
            <p>Node.js é uma tecnologia usada para executar código JavaScript fora do navegador. Com ele podemos construir uma aplicação web em geral, desde sites até APIs e microsserviços.</p>

            </div>
            <Link to="https://www.devmedia.com.br/node-js">Guia de Node.js</Link>
            <BotaoVoltar />
        </section>
    );
}

export default PaginaBackEnd;