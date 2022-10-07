<!-- Condicional Switch -->

<?php
  $tipo = 'carro';

  switch ($tipo) {
    case 'foto':
      echo "Exibir uma foto";
      break;
    case 'video':
      echo "Exibir um vídeo";
      break;
    case 'texto':
      echo "Exibir uma texto";
      break;
    default:
      echo "Inválido!";
  }
?>