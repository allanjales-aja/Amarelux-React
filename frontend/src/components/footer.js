import React from 'react';
import pagamento from '../images/forma de pagamento.jpg';

export function Footer() {
        return(
        <footer className = "container-fluid" id="Rodape">
            <hr/>
            <p className = "h6"><strong>Formas de pagamento:</strong></p>
            <img src= {pagamento} alt="Formas de pagamento" width="25%"></img>
            <br/>
            <p>&copy; Recode Pro 2020 - Allan Jales</p>
      </footer>
        );
    }

