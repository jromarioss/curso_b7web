<!-- Função nativa data e hora -->

<?php
  echo time(); // mostra milesegundos dês da data ZERO 01/01/1970
  echo "<br/>";
  echo date('d/m/Y H:i:s'); // mostra data, dia mes e ano e hora fuso de greenuich
  // padrão internacional ano mes e dia
  echo "<br/>";

  $data = "2020-03-07";
  echo date('d/m/Y', strtotime($data));
  // $timer = strtotime($data);
  // echo $timer;
?>