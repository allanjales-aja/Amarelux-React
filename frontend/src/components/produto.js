import React from 'react';

// function select_categ(categoria){
//     //alert(categoria);
//     let elementos = document.getElementsByClassName("ItemProdutos");
//     //console.log(opcao);
//     for(var i=0; i<elementos.length; i++){
//         //console.log(elementos[i].id);
//         if (categoria == elementos[i].id)
//             elementos[i].style = "display:inline-block;";
//         else
//             elementos[i].style = "display:none;";
//     }
//     let opcao = document.getElementsByTagName("li");
//     for(var l=0; l<opcao.length; l++){
//         console.log(opcao[l].id == categoria);
//         if (opcao[l].id == categoria)
//             switch(opcao[l].id){
//             case 'ar':
//                 opcao[l].style = "font-weight: bold;";
//                 break;
//             case 'fogao':
//                 opcao[l].style = "font-weight: bold;";
//                 break;
//             case 'geladeira':
//                 opcao[l].style = "font-weight: bold;";
//                 break;
//             case 'lavaroupas':
//                 opcao[l].style = "font-weight: bold;";
//                 break;
//             case 'lavaloucas':
//                 opcao[l].style = "font-weight: bold;";
//                 break;
//             case 'microondas':
//                 opcao[l].style = "font-weight: bold;";
//                 break;
//             default:
//                 opcao[l].style = "font-weight: normal;";
//         }
//         else
//             opcao[l].style = "font-weight: normal;";
//     }
// };

// let select_todos = (categoria) => {
//     let elementos = document.getElementsByClassName("ItemProdutos");
//     //console.log(elementos);
//     for(var i=0; i<elementos.length; i++){
//             elementos[i].style = "display:inline-block;";
//     }

//     let opcao = document.getElementsByTagName("li");
//     for(var t=0; t<opcao.length; t++){
//         console.log(opcao[t].id == categoria);
//         if (opcao[t].id == categoria)
//         opcao[t].style = "font-weight: bold;";
//         else
//         opcao[t].style = "font-weight: normal;";
//     }
// };

export default class Produto extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nome_prod:'',
            nome_img: '',
            descricao: '',
            valor: '',
            valor_unit: '',
            produtos:[],
            evento:'',
            borderRadius: "0",
            borderColor: "none",
            borderStyle: "none",
            borderWidth: "0",

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

    destacar = () =>{
        this.setState({
            borderRadius: "30px", borderColor: "#edde07", borderStyle: "double", borderWidth: "5pt"
        })
    }
    
    normal = () => {
        this.setState({
            borderRadius: "0", borderColor: "none", borderStyle: "none", borderWidth: "0"
        })
    }

    zoom = (imagem) => {
        //console.log(imagem);
        if(imagem.width===250)
            imagem.width=120;
        else
            imagem.width=250;
    };


    render(){
        
        const styProd = {
            fontSize: "21px"
          };
        
        const styProdt = {
        textDecoration: "line-through"
        };

        return(
    <>
        <div className = "container-fluid">
            <div className = "row ml-5 w-90">
                <div className = "col-w-15" id = "Categorias">
                    <h3 style={styProd}><strong>Categorias</strong></h3>
                    <hr></hr>
                    <ul>
                        <li /*onClick="select_todos('todos')"*/ id="todos">Todos (14)</li>
                        <li /*onClick="select_categ('ar')"*/ id="ar">Ar Condicionado (2)</li>
                        <li /*onClick="select_categ('fogao')"*/ id="fogao">Fogões (2)</li>
                        <li /*onClick="select_categ('geladeira')"*/ id="geladeira">Geladeiras (3)</li>
                        <li /*onClick="select_categ('lavaroupas')"*/ id="lavaroupas">Lavadora de Roupas (2)</li>
                        <li /*onClick="select_categ('lavaloucas')"*/ id="lavaloucas">Lava Louças (2)</li>
                        <li /*onClick="select_categ('microondas')"*/ id="microondas">Micro-Ondas (3)</li>
                    </ul>
                </div>

                <div className = "col Produtos">
                    {this.state.produtos.map( produto => (
                    <div className = "ItemProdutos mr-4" id={produto.nome_prod} key={produto.descricao}
                        style = {{
                            borderRadius: this.state.borderRadius, borderColor: this.state.borderColor, 
                            borderStyle: this.state.borderStyle, borderWidth: this.state.borderWidth
                        }}
                        onMouseOver={this.destacar.bind(this)} onMouseOut={this.normal.bind(this)}>
                        <br></br>
                        <img src={produto.nome_img} width="170px" alt = "Produto" onClick={this.zoom}></img>
                        <p className="DescricaoProdutos">{produto.descricao}</p>
                        <hr></hr>
                        <p className="DescricaoProdutos" style={styProdt}>R$ {produto.valor_unit.replace('.', ',')}</p>
                        <p className="PrecoProdutos">R$ {produto.valor.replace('.', ',')}</p>
                    </div>))}                   
                </div>
            </div>
        </div>

    </>
        );
    }
}
