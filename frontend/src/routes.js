import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home.js';
import Loja from './components/loja.js';
import Hproduto from './components/hproduto.js';
import Contato from './components/contato.js';
import Pedido from './components/pedido.js';
import Cadastro from './components/cadastro.js';

export default function Routes() {

    return(
        <BrowserRouter> 
            <Switch>

                <Route exact path="/" exact component={Home} /> 
                <Route exact path="/lojas" component={Loja} />
                <Route exact path="/produtos" component={Hproduto} />
                <Route exact path="/contatos" component={Contato} />
                <Route exact path="/pedidos" component={Pedido} />
                <Route exact path="/cadastro" component={Cadastro} />     

            </Switch>

        </BrowserRouter>
    )

 };