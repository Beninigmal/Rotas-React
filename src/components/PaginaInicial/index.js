import React from 'react';
import '../PaginaInicial/style.css';
import { Link } from 'react-router-dom';


function PaginaInicial() {
    return (

        <section>
            <div className="container-1">
                <h1>Escolha seu caminho JavaScript</h1>
                <div className="btn">
                    <Link to="/front-end">
                    <button className="frontend">Front-end</button>
                    </Link>
                    <Link to="/back-end">
                    <button className="backend">Back-end</button>
                    </Link>
                </div>
            </div>
        </section>

    );
}

export default PaginaInicial