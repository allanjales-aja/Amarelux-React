import React from 'react';
import Fcontato from './formContato';

export default class Contato extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data_msg:'',
            nome_cli: '',
            mensagem: '',
            msgs:[] 
        }
    }

    componentDidMount()
    {
        fetch("http://localhost/projetos/nome-do-projeto/backend/api/apimensage.php")
        .then(response => response.json())
        .then(mensagens =>
        {
            this.setState({
                msgs: mensagens
            })
        })
    }

    render(){

        return(
    <>
        <div className = "jumbotron mt-2">
            <header>
                <h2 className = "display-6">Fale Conosco</h2>
                <p className="lead">Sinta-se em casa, a Amarelux é sua!</p>
                <hr className="my-1"/>
            </header>
        </div>

        <div className = "container-fluid ml-5">
            <div className = "row ml-5">
                <div className = "col ml-5">
                    <img src="./imagens/e-mail.png" alt = "E-mail" width="40px" className="FaleConosco"/>
                    <a href="#top" className="FaleConosco" /*onMouseOver="destacarLoja(this)" onMouseOut="normalLoja(this)"*/>contato@amareluxeletro.com.br</a>
                </div>

                <div className = "col">
                    <img src="./imagens/Whatsapp.png" alt = "Whatsapp" width="80px" className="FaleConosco"/>
                    <a href="#top" className="FaleConosco" /*onMouseOver="destacarLoja(this)" onMouseOut="normalLoja(this)"*/>(21) 9999-2020</a>
                </div>
            </div>
        </div>
        <div className = "container mt-5 w-70">
            <div className = "row">
                    <Fcontato />       
                    <div className = "col">
                        {this.state.msgs.map( msg => (
                        <ul className = "list-group" key={msg.data_msg}>
                            <li className="list-group-item list-group-item-secondary">
                                Data: {msg.data_msg}<br />
                                Nome: {msg.nome_cli}<br />
                                Mensagem: {msg.mensagem}<br /> 
                            </li>
                        </ul>))}
                    </div>
            </div>
        </div>
    </>
        );
    }
}
