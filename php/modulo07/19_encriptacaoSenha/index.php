<?php
  $senha = '1234';

  /* 1 a senha 2 o tipo de hash */
  $hash = password_hash($senha, PASSWORD_DEFAULT);
  /* PASSWORD_BCRYPT 60 caracteres sempre */
  /* $hash = md5($senha); gera hash de 32 caracteres o hash não muda */

  echo "SENHA ORIGINAL: ".$senha."<br/>";
  echo "HASH: ".$hash;
?>