<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
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
    $senha = $_POST["senha"];

    $sql = "SELECT * FROM usuarios WHERE nome = '$nome' AND senha = '$senha'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        echo "Login bem-sucedido!";
         $caminho_absoluto = $_SERVER['DOCUMENT_ROOT'] . "/front-end/index.html";
        header("Location: $caminho_absoluto"); 
exit;
    } else {
        echo "Login falhou. Verifique suas credenciais.";
    }
}

$conn->close();
?>