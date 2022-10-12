<!-- Exercício-->

<?php
  $dia = date('w');
  $data = date('d/m/Y');

  switch($dia) {
    case 0;
      echo $data." - Domingo";
      break;
    case 1;
      echo $data." - Segunda-feira";
      break;
    case 2;
      echo $data." - Terça-feira";
      break;
    case 3;
      echo $data." - Quarta-feira";
      break;
    case 4;
      echo $data." - Quinta-feira";
      break;
    case 5;
      echo $data." - Sexta-feira";
      break;
    case 6;
      echo $data." - Sábado";
      break;
  }
?>