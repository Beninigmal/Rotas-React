import React from 'react';
import '../BotaoVoltar/style.css';
import { Link } from 'react-router-dom';

function BotaoVoltar() {
    return (
        <Link to="/">
    <button className="btn-voltar"> 
        Voltar
    </button>
        </Link>
);
}

export default BotaoVoltar;