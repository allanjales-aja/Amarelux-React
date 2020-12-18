<?php
    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
    require ("../Connection.php");

    if($_SERVER['REQUEST_METHOD']==='GET'){
        $sql = "SELECT * FROM produtos;";
        $resultado = query($sql);
        $produtos = [];

        while($rows = mysqli_fetch_assoc($resultado)){
            $produtos[] = $rows;
        }
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
    echo json_encode(utf8ize($produtos));
