import React from 'react';
import Produtos from './produtos';

export default function Hproduto() {
    return(
    <>
    <title>Produtos - AmareLux Eletro</title>
            <div className = "jumbotron mt-2">
                <header>
                    <h2 className = "display-6">Produtos</h2>
                    <p className="lead">Preço e atendimento sem comparação!</p>
                    <hr className="my-1"></hr>
                </header>
            </div>
        <Produtos />
    </>
  );
}
