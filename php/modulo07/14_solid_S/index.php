<?php
  /* responsável pelo usuário */
  class Usuario {

    public function setNome() {}
    public function getNome() {}

  }

  /* responsãovel pela manipulação do usuário */
  class Usuariodb {

    public function add(Usuario $u) {}
    public function update(Usuario $u) {}
    public function delete(Usuario $id) {}

  }
?>
