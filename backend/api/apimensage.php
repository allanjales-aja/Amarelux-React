<?php
    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
    require ("../Connection.php");

    if($_SERVER['REQUEST_METHOD']==='GET'){
        $sql = "SELECT * FROM clientes
                INNER JOIN mensagens
                ON mensagens.email = clientes.email;";
        $resultado = query($sql);
        $mensagens = [];

        while($rows = mysqli_fetch_assoc($resultado)){
            $mensagens[] = $rows;
        }

        function utf8ize($d) {
            if (is_array($d)) {
                foreach ($d as $k => $v) {
                    $d[$k] = utf8ize($v);
                }
            } else if (is_string ($d)) {
                return utf8_encode($d);
            }
            return $d;
        }
        echo json_encode(utf8ize($mensagens));
    
    } else if($_SERVER['REQUEST_METHOD']==='POST') {
        $email = $_POST['email'];
        $mensagem = $_POST['mensagem'];
        
        if($email !="" && $mensagem !=""){
            $sql = "INSERT INTO mensagens (nome_msg, email, mensagem) VALUES (null, '$email', '$mensagem');";
        }
        nonquery($sql);
    }