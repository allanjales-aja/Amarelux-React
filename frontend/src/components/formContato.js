import React from 'react';

export default function Fcontato (){

       const setMensagem = (m) => {
            const url = "http://localhost/projetos/nome-do-projeto/backend/api/apimensage.php";
            const dados = new FormData(m.target);
            const cabecalho = {
                method:"POST", 
                body: dados,
            };
            fetch(url, cabecalho);
        }

        return(
    <>
        <div className = "col">
            <form className = "form-inline justify-content-center" onSubmit={setMensagem}>
                <div className = "row mb-4 justify-content-center">
                    <label htmlFor="email" className="TituloGeral mr-2">E-mail:</label>
                    <input className="form-control mr-5" type="email" id="email" name="email" placeholder = "email@exemplo.com.br"/>
                </div>

                <div className = "row mb-4 justify-content-center">        
                    <label htmlFor="mensagem" className="TituloGeral ml-5 mr-2">Mensagem:</label>
                    <textarea className="form-control mr-3 mt-3" id="mensagem" name="mensagem" rows="7" cols="40" 
                        placeholder = "Fique à vontade, a Amarelux quer te conhecer!"></textarea>
                </div>

                <button className="btn btn-primary btn-block w-50" type="submit"value="Enviar">Enviar</button>
            </form>
        </div>    
    </>
        );
}

