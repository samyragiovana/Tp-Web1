<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "tpweb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    $sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $nome, $email, $senha);

    if ($stmt->execute()) {        
        echo("Registrado com Sucesso");
    } else {
        echo "Erro ao criar o registro: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>