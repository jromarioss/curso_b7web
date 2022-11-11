<?php

header("Access-Control-Allow-Origin: *"); // liberar acesso de requições
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); // liberar os metodos
header("Content-Type: application/json"); // sempre avisa que o retorno é um json

echo json_encode($array); // transforma array em json
exit;