<?php
require_once './Dao/DaoUsuario.php';
require_once './Dao/DaoUsuario.php';
require_once './modelo/usuario.php';

session_start();

$obj = new Usuario();
$dao = new DaoUsuario();

$usuario = filter_input(INPUT_POST, 'email');
$senha = filter_input(INPUT_POST, 'senha');

$obj->setEmail($email);
$obj->setSenha($senha);
$lista = $dao->logar($obj);

if ($lista) {
    $_SESSION['id'] = $lista['id'];
    $_SESSION['nome'] = $lista['nome'];
    $_SESSION['email'] = $lista['email'];
    $_SESSION['senha'] = $lista['senha'];
    header("Location: ../front-end/index.html");
} else {
    $_SESSION['invalido'] = true;
    header("Location: ../front-end/minha-conta.html");
}