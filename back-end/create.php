<?php
// Servidor Web Hosting
/*$servername = "localhost";
$username = "id21519798_bjf";
$password = "Cirlene_1998";
$dbname = "id21519798_burgueriabjf";
*/
//Servido Local
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "tpweb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

/* if (isset($_GET["delete"])) {
    $id = $_GET["delete"];
   
    echo "ID a ser excluído: " . $id;

    $sql = "DELETE FROM usuario WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo "Registro excluído com sucesso!";
    } else {
        echo "Erro ao excluir o registro: " . $stmt->error;
    }

    $stmt->close();
} */

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    $sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $nome, $email, $senha);

    if ($stmt->execute()) {
        
        echo("Registrado com Sucesso");
        $caminho_absoluto = $_SERVER['DOCUMENT_ROOT'] . "../front-end/index.html";
        exit();  
        
    } else {
        echo "Erro ao criar o registro: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>