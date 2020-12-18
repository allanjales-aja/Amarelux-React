<?php
    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
    require ("../Connection.php");

    if($_SERVER['REQUEST_METHOD']==='GET'){
        $sql = "SELECT * FROM produtos
                INNER JOIN ped
                ON ped.cod_produtos = produtos.cod_produtos;";
        $resultado = query($sql);
        $pedidos = [];

        while($rows = mysqli_fetch_assoc($resultado)){
            $pedidos[] = $rows;
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
        echo json_encode(utf8ize($pedidos));
    
    } else if($_SERVER['REQUEST_METHOD']==='POST'){
        $prod = $_POST['prod'];
        $qtd = $_POST['qtd'];
        $emailp = $_POST['emailp'];
        $senhap = $_POST['senhap'];
        
        if($qtd !="" && $emailp !="" && $senhap !=""){
            $sql = "SELECT * FROM clientes WHERE email = '$emailp' AND senha = '$senhap';";
            $result = query($sql);     

            if($result and $result->num_rows > 0 ){
                while($rows = $result->fetch_assoc()){   
                    $cli = $rows['cod_clientes'];
                    $sqli = "INSERT INTO ped (cod_clientes, cod_produtos, quantidade)
                            VALUES ('$cli', '$prod', '$qtd');";        
                }
            }
        }
        nonquery($sqli);
    }

        
    