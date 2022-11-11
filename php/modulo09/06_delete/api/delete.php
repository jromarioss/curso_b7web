<?php

require '../config.php';

$method = strtolower($_SERVER['REQUEST_METHOD']);

if ($method === 'delete') { // verifica se tem metodo
  
  // le o input rais e transforma em um array e joga em input
  parse_str(file_get_contents('php://input'), $input); // para ler arquivos

  $id = $input['id'] ?? null;

  $id = filter_var($id);

  if ($id) {
    $sql = $pdo->prepare("DELETE FROM notes WHERE id = :id");
    $sql->bindValue(':id', $id);
    $sql->execute();

  } else {
    $array['error'] = 'ID não enviado';
  }

} else {
  $array['error'] = 'Método não permitido (apenas DELETE)';
}

require '../return.php';