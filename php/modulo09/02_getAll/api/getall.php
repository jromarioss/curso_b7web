<?php

require '../config.php';

$method = strtolower($_SERVER['REQUEST_METHOD']);

if ($method === 'get') { // verifica se tem metodo
  $sql = $pdo->query("SELECT * FROM notes"); // faz requisição
  if ($sql->rowCount() > 0) { // verifica se tem resultado
    $data = $sql->fetchAll(PDO::FETCH_ASSOC); // pega resulta

    foreach($data as $item) { // faz foreach no resutlado
      $array['result'][] = [
        'id' => $item['id'], // recebe o item id
        'title' => $item['title'], // recebe o item title
      ];// adiciona um novo item no array
    }
  }
} else {
  $array['error'] = 'Método não permitido (apenas GET)';
}

require '../return.php';