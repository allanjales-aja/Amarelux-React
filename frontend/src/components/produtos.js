import React from 'react';
import { useState, useEffect } from 'react';
import Produto from './produto';


export default function Produtos() {

    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        async function dadosProdutos(){
            const answer  = await fetch("http://localhost/projetos/nome-do-projeto/backend/api/apiproduct.php")
            const data = await answer.json()
            setProdutos(data);
    }
       dadosProdutos();
       
    }, []);

    const [filtro, setFiltro] = useState([]);
        console.log(filtro);

    function filtrarCategoria(p) {
        setFiltro(p.target.id);

    }

    return(

        <div className = "container-fluid">
            <div className = "row ml-5 w-90">
                <div className = "col-w-15" id = "Categorias">
                    <h3 style={{fontSize: "21px"}}><strong>Categorias</strong></h3>
                    <hr></hr>
                    <ul>
                        <li onClick={filtrarCategoria} id="">Todos (14)</li>
                        <li onClick={filtrarCategoria} id="ar">Ar Condicionado (2)</li>
                        <li onClick={filtrarCategoria} id="fogao">Fogões (2)</li>
                        <li onClick={filtrarCategoria} id="geladeira">Geladeiras (3)</li>
                        <li onClick={filtrarCategoria} id="lavaroupas">Lavadora de Roupas (2)</li>
                        <li onClick={filtrarCategoria} id="lavaloucas">Lava Louças (2)</li>
                        <li onClick={filtrarCategoria} id="microondas">Micro-Ondas (3)</li>
                    </ul>
                </div>

                <div className = "col Produtos">
                    {produtos.map( produto => {
                        if (filtro == produto.nome_prod) {
                            return <Produto key={produto.cod_produtos} cod_produtos={produto.cod_produtos} 
                            nome_img={produto.nome_img} descricao={produto.descricao} 
                            valor_unit={produto.valor_unit.replace('.', ',')} 
                            valor={produto.valor.replace('.', ',')} />
                        
                        } else if ( filtro == "") {
                            return <Produto key={produto.cod_produtos} cod_produtos={produto.cod_produtos} 
                            nome_img={produto.nome_img} descricao={produto.descricao} 
                            valor_unit={produto.valor_unit.replace('.', ',')} 
                            valor={produto.valor.replace('.', ',')} />
                        }
                    })}                   
                </div>
            </div>
        </div>
    );
}

