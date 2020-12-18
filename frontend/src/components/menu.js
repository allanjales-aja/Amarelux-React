import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import logo from '../images/LogoAmareLux.jpg';

export function Menu() {
    return(
            <>
            <div className="Navbar"><Navbar expand="lg">
                <div className="NavbarBrand"><Navbar.Brand className="ml-3" href="/">Amarelux</Navbar.Brand></div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto justify-content-center">
                        <Nav.Item className="pl-5">
                        <div className="NavLink"><Nav.Link href="produtos" 
                            >Produtos</Nav.Link></div></Nav.Item>
                        <Nav.Item className="pl-3">
                        <div className="NavLink"><Nav.Link  href="pedidos" 
                            >Pedido</Nav.Link></div></Nav.Item>
                        <Nav.Item className="pl-3">
                        <div className="NavLink"><Nav.Link href="lojas"
                            >Lojas</Nav.Link></div></Nav.Item>
                        <Nav.Item className="pl-3">
                        <div className="NavLink"><Nav.Link href="contatos" 
                            >Fale Conosco</Nav.Link></div></Nav.Item>
                        <Nav.Item className="pl-3">
                        <div className="NavLink"><Nav.Link href="#" 
                             disabled>Lançamentos</Nav.Link></div></Nav.Item>
                    </Nav>
                            <a className="btn btn-success mr-3" href="cadastro">Cadastre-se</a>
                            <img  width="10%" src={logo} className = "rounded mr-4" alt="AmareLux Eletro"></img>    
                            <Form inline className="my-2 my-lg-0 mr-5">
                                <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" aria-label="Pesquisar" />
                                <Button variant="outline-info my-2 my-sm-0" type="submit">Pesquisar</Button>
                            </Form>
                </Navbar.Collapse>
            </Navbar></div>
            </>
    );
}

