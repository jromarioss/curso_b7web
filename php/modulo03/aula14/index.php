<!-- multiplo arquivos -->

<?php
  include('abs.php'); // importa e se não acha não impede de o código continuar
  require('config.php'); // importa as variáveis e impede a execução
  require('header.php'); // importa arquivo diferente
  require_once('header.php'); // impede de duplica variável e conteúdo

  echo "Conteúdo do site....<br/>";
  echo "Nome do usuário: <br/>".$usuario;
  echo "A senha do usuário: ".$senha;
?>