import React from 'react';

function Home() {
    return(
        <>
        <title>AmareLux Eletro</title>
        <main className = "jumbotron jumbotron-fluid">
            <p className = "h1"><strong>Seja bem vindx!</strong></p>
            <p className = "h4 mt-4">Aqui em nossa loja, 
                <em /*onMouseOver= {destacarMain} onMouseOut= {normalMain}*/> programadores têm desconto
                </em> nos produtos para sua casa!
            </p>
        </main>
        </>
    );
}

export default Home;