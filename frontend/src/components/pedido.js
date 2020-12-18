import React from 'react';
import Produto from './produto';


export default class Pedido extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cod_produtos: '',
            descricao: '',
            produtos:[],
        }
    }

    async componentDidMount()
    {
        const response = await fetch("http://localhost/projetos/nome-do-projeto/backend/api/apiproduct.php")
        const itens = await response.json()
        
            this.setState({
                produtos: itens
            })
    }


    render(){

        const setPedido = (c) => {
            const url = "http://localhost/projetos/nome-do-projeto/backend/api/apipedido.php";
            const dados = new FormData(c.target);
            const cabecalho = {
                method:"POST", 
                body: dados,
            };
            fetch(url, cabecalho);
            console.log('foi');
        }

        return(
    <>
        <title>Pedido - AmareLux Eletro</title>
            <div className = "jumbotron mt-2">
                <header>
                    <h2 className = "display-6">Pedido</h2>
                    <p className="lead">Escolha e faça já o seu pedido! A Amarelux quer te fazer feliz!</p>
                    <hr className="my-1"></hr>
                </header>
            </div>
            

        <div className = "container mr-5"> 
            <form className = "form-inline justify-content-center" onSubmit={setPedido}>
                <div className = "row mb-4">
                    <label htmlFor="prod" className="TituloGeral mr-2">Produto:</label>
                    <select className="form-control-md mr-5 bg-info text-white" name="prod" id="prod">
                    {this.state.produtos.map( produto => (
                    <option value={produto.cod_produtos} key={produto.cod_produtos}>{produto.descricao}</option>
                    ))}</select>
                    <label htmlFor="qtd" className="TituloGeral mr-2">Quantidade:</label>
                    <input className="form-control-md mr-5 " type="number" id="qtd" name="qtd" placeholder = "Apenas números"/>
                </div>
                
                <div className = "row mb-4">           
                    <label htmlFor="emailp" className="TituloGeral mr-2">E-mail:</label>
                    <input className="form-control-md mr-5" type="email" id="emailp" name="emailp" placeholder = "Digite e-mail cadastrado"/>

                    <label htmlFor="senhap" className="TituloGeral mr-2">Senha:</label>
                    <input className="form-control-md mr-4" type="password" id="senhap" name="senhap" placeholder = "Digite senha cadastrada"/>
                    
                    <button className="btn btn-outline-dark" type="submit" value="IncluirPedido">Incluir no Pedido</button>
                    
                    <a className="btn btn-outline-success ml-3" href="http://localhost:3000/cadastro">Cadastre-se</a>
                </div>
            </form>
            
            <hr/>
        </div>

        <Produto />
</>
        );
    }
}
