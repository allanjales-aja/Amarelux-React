import React from 'react';

export default function Cadastro (){

    const setCadastro = (c) => {
         const url = "http://localhost/projetos/nome-do-projeto/backend/api/apicadastro.php";
         const dados = new FormData(c.target);
         const cabecalho = {
             method:"POST", 
             body: dados,
         };
         fetch(url, cabecalho);
     }

        return(
    <>
        <div className = "jumbotron mt-2">
            <header>
                <h2 className = "display-6">Cadastre-se</h2>
                <p className="lead">Faça parte da família Amarelux!</p>
                <hr className="my-1"/>
            </header>
        </div>
        
        <div className = "container-fluid mr-5">
            <form className = "form-inline justify-content-center" onSubmit={setCadastro}>
                <div className = "row mb-4 justify-content-center">
                    <div className="input-group mb-3">
                    <label htmlFor="nomec" className="TituloGeral mr-2">Nome:</label>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="nomecpre">Nome completo</span>
                    </div>
                    <input  className="form-control mr-5" type="text" id="nomec" name="nomec"/>
                    </div>

                    <div className="input-group mb-3">
                    <label htmlFor="cpf" className="TituloGeral mr-2">CPF:</label>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="cpfpre">Apenas números</span>
                    </div>
                    <input className="form-control mr-5" type="number" id="cpf" name="cpf"/>
                    </div>
                    
                    <div className="input-group mb-3">
                    <label htmlFor="datan" className="TituloGeral mr-2">Data de Nascimento:</label>
                    <input className="form-control mr-5" type="date" id="datan" name="datan"/>
                    </div>
                </div>

                <div className = "row mb-4 justify-content-center">
                <div className="input-group mb-3">
                    <label htmlFor="cep" className="TituloGeral mr-2">CEP:</label>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="ceppre">Apenas números</span>
                    </div>
                    <input className="form-control mr-2" type="number" id="cep" name="cep"/>
                    </div>

                    <div className="input-group mb-3">
                    <label htmlFor="enderecoc" className="TituloGeral mr-2">Endereço:</label>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="enderecocpre">Rua, Número, Complemento - Bairro - Município - UF</span>
                    </div>
                    <input className="form-control mr-2" type="text" id="enderecoc" name="enderecoc"  style={{width: "400px"}}
                        placeholder = ""/>
                    </div>                    
                </div>
                
                <div className = "row mb-4 justify-content-center">
                    <div className="input-group mb-3">
                    <label htmlFor="telefone" className="TituloGeral mr-2">Telefone:</label>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="telefonepre">DDDxxxxxxxxx</span>
                    </div>
                    <input className="form-control mr-2" type="number" id="telefone" name="telefone"/>
                    </div>

                    <div className="input-group mb-3">
                    <label htmlFor="emailc" className="TituloGeral mr-2">E-mail:</label>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="emailcpre">email@exemplo.com.br</span>
                    </div>
                    <input className="form-control mr-3" type="email" id="emailc" name="emailc"/>
                    </div>
                </div>
                
                <div className = "row mb-4 justify-content-center">
                    <div className="input-group mb-3">
                    <label htmlFor="senhaa" className="TituloGeral mr-2">Digite sua senha:</label>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="senhaapre">Digite 8 caracteres</span>
                    </div>
                    <input className="form-control mr-3" type="password" id="senhaa" name="senhaa"/>
                    </div>

                    <div className="input-group mb-3">
                    <label htmlFor="senhab" className="TituloGeral mr-2">Confirme sua senha:</label>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="senhabpre">Repita sua senha</span>
                    </div>
                    <input className="form-control mr-3" type="password" id="senhab" name="senhab"/>
                    </div>
                </div>

                <div className = "row mb-4 justify-content-center">
                    <div className = "form-check ml-5">
                        <input className = "form-check-input" type="radio" id="1" name="oferta" value="1" defaultChecked/>
                        <label className = "form-check-label mr-5" htmlFor="1" style={{fontSize: "16px"}}>Quero receber ofertas Amarelux</label>
                    </div>
                    <div className = "form-check">
                        <input className = "form-check-input" type="radio" id="0" name="oferta" value="0"/> 
                        <label className = "form-check-label mr-5" htmlFor="0" style={{fontSize: "16px"}}>Vou deixar de aproveitar as ofertas Amarelux</label>
                    </div>
                </div>

                <button className="btn btn-primary btn-block w-50" type="submit" value="Cadastrar">Cadastrar</button>
            </form>
        </div>
    </>
        );
    
}
