<!-- PDO Biblioteca de conexão com banco de dados -->
<?php
  // conecxão 1 config, 2 usuario, 3 senha
  $pdo = new PDO("mysql:dbname=test;host=localhost", "root");

  // query oque vc quer consulta e o comando depois
  $sql = $pdo->query('SELECT * FROM usuarios');

  echo "Total: ".$sql->rowCount(); // contagem de linhas

  // fetchAll pega todo os dados, PDO::FETCH_ASSOC associa e não duplica
  $dados = $sql->fetchAll( PDO::FETCH_ASSOC ); 

  echo '<pre>';
  print_r($dados);
?>