<?php
    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
    require ("../Connection.php");

    if($_SERVER['REQUEST_METHOD']==='POST') {
        $nomec = $_POST['nomec'];
        $cpf = $_POST['cpf'];
        $datan = $_POST['datan'];
        $cep = $_POST['cep'];
        $enderecoc = $_POST['enderecoc'];
        $telefone = $_POST['telefone'];
        $emailc = $_POST['emailc'];
        $senhaa = $_POST['senhaa'];
        $senhab = $_POST['senhab'];
        $oferta = $_POST['oferta'];
        
        if($nomec !="" && $cpf !="" && $datan !="" && $cep !="" && $enderecoc !="" && $telefone !="" && 
        $emailc !="" && $senhaa !="" && $senhab !="" && $oferta !="" && $senhaa === $senhab){
            if($oferta = "true"){$oferta = 1;}else{$oferta = 0;}
            $sql = "INSERT INTO clientes (nome_cli, cpf, datan, cep, endereco, telefone, email, senha, oferta)
                    VALUES ('$nomec', '$cpf', '$datan', '$cep', '$enderecoc', '$telefone', '$emailc', '$senhaa', 
                    '$oferta')";         
            }
            nonquery($sql);
    }