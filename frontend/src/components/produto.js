export default function Produto(props) {
  
    return(
    <div className = "ItemProdutos mr-4 mb-2">
        <img src={props.nome_img} id={props.nome_img} width="170px" alt = "Produto"></img>
        <p className="DescricaoProdutos">{props.descricao}</p>
        <hr />
        <p className="DescricaoProdutos" style={{textDecoration: "line-through"}}>R$ {props.valor_unit}</p>
        <p className="PrecoProdutos">R$ {props.valor}</p>
    </div>     
    );           
};
