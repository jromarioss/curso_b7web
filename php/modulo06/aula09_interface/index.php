<!-- Orientação a Objetos -->

<!-- Interface um guia de implementação de uma classe  -->
<?php
  interface DataBase {
    public function listarProdutos();
    public function adicionarProdutos();
    public function alterarProduto();
  }

  class MysqlDb implements DataBase {
    public function listarProdutos() {

    }

    public function adicionarProdutos() {
      echo "Adicionando com Mysql";
    }

    public function alterarProduto() {

    }
  }

  class OracleDb implements DataBase {
    public function listarProdutos() {

    }

    public function adicionarProdutos() {
      echo "Adicionando com Oracle";
    }

    public function alterarProduto() {

    }
  }

  class NodeDb implements DataBase {
    public function listarProdutos() {

    }

    public function adicionarProdutos() {
      echo "Adicionando com Node";
    }

    public function alterarProduto() {
      
    }
  }

  $db = new MysqlDb();
  $db->adicionarProdutos();
?>