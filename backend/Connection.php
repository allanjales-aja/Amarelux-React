<?php
    function query($sql){
        $servidor = "localhost";
        $usuario = "root";
        $senha = "";
        $banco = "amarelux";

        $conn = mysqli_connect($servidor, $usuario, $senha, $banco);
        $resultado = mysqli_query($conn, $sql);
        mysqli_close($conn);
        return $resultado;
    }

    function nonquery($sql){
        $servidor = "localhost";
        $usuario = "root";
        $senha = "";
        $banco = "amarelux";

        $conn = mysqli_connect($servidor, $usuario, $senha, $banco);
        $resultado = mysqli_query($conn, $sql);
        mysqli_close($conn);
    }
?>