<?php
class Usuario
{
    private $id;
    private $nome;
    private $email;
    private $senha;

    public function __construct()
    {
        
    }

    public function getIdUsuario()
    {
        return $this->id;
    }
    
    public function setIdUsuario($id)
    {
        $this->id = $id;

        return $this;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;

        return $this;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    public function getSenha()
    {
        return $this->senha;
    }

    public function setSenha($senha)
    {
        $this->senha = $senha;

        return $this;
    }
}
?>