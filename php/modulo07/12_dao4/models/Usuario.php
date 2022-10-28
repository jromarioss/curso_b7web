<!-- Classe de manipulação de usuário -->

<?php
  interface UsuarioDAO {
    public function add(Usuario $u); // add um usuário
    public function findAll(); // lista todos
    public function findByEmail($email);
    public function findById($id); // procura pela id e manda o id
    public function update(Usuario $u); // atualiza o usuario e manda o obj
    public function delete($id); // deleta
  }

  class Usuario {

    private $id;
    private $nome;
    private $email;

    public function getId() {
      return $this->id;
    }
    public function setId($i) {
      $this->id = trim($i);
    }

    public function getNome() {
      return $this->nome;
    }
    public function setNome($n) {
      $this->nome = ucwords(trim($n)); // ucwords cada nome começa com letra maiúscula
    }

    public function getEmail() {
      return $this->email;
    }
    public function setEmail($e) {
      $this->email = strtolower(trim($e));
    }

  }
?>