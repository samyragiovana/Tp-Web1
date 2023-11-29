<?php
class DaoUsuario
{
    public function inclui(Usuario $usuario)
    {
        $sql = 'insert 
                into usuario (nome, email, senha) 
                values (?, ?, ?)';

        $pst = Conexao::getPreparedStatement($sql);
        $pst->bindValue(1, $usuario->getNome());
        $pst->bindValue(2, $usuario->getEmail());
        $pst->bindValue(3, $usuario->getSenha());

        if($pst->execute())
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    public function exclui(Usuario $usuario)
    {
        $sql = 'delete 
                from usuario 
                where id = ?';
        $pst = Conexao::getPreparedStatement($sql);
        $pst->bindValue(1, $usuario->getIdUsuario());
        if($pst->execute())
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    public function altera(Usuario $usuario)
    {
        $sql = 'update 
                funcionario set nome = ?, email = ?, senha = ?
                where id = ?';
        $pst = Conexao::getPreparedStatement($sql);
        $pst->bindValue(1, $usuario->getNome());
        $pst->bindValue(2, $usuario->getEmail());
        $pst->bindValue(3, $usuario->getSenha());
        $pst->bindValue(4, $usuario->getIdUsuario());
        if($pst->execute())
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    public function lista()
    {
        $lista = [];
        $pst = Conexao::getPreparedStatement('select * from usuario;');
        $pst->execute();
        $lista = $pst->fetchAll(PDO::FETCH_ASSOC);
        return $lista;
    }

    public function logar(Usuario $usuario)
    {
        $lista = [];
        $pst = Conexao::getPreparedStatement('select * 
                                              from usuario 
                                              where email = ? and senha = ?');
        $pst->bindValue(1, $usuario->getEmail());
        $pst->bindValue(2, $usuario->getSenha());
        $pst->execute();
        $lista = $pst->fetchAll(PDO::FETCH_ASSOC);

        if($lista)
        {
            $ok = $lista[0];
            return $ok;
        }
        else
        {
            return false;
        }
    }

    public function localiza($id)
    {
        $lista = [];
        $pst = Conexao::getPreparedStatement('select * from usuario where id = ?;');
        $pst->bindValue(1, $id);
        $pst->execute();
        $lista = $pst->fetchAll(PDO::FETCH_ASSOC);
        return $lista;
    }
}
?>