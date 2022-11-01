<?php
namespace src\controllers;

use \core\Controller;

class HomeController extends Controller {

  public function index() {
    $nome = 'José';
    $idade = 28;

    $post = [
      ['titulo' => 'titulo de teste 1', 'corpo' => 'Corpo de teste 1'],
      ['titulo' => 'titulo de teste 2', 'corpo' => 'Corpo de teste 2'],
      ['titulo' => 'titulo de teste 3', 'corpo' => 'Corpo de teste 3'],
      ['titulo' => 'titulo de teste 4', 'corpo' => 'Corpo de teste 4'],
    ];

    $this->render('home', [
      'nome' => $nome, 
      'sobrenome' => 'Santos', 
      'idade' => $idade,
      'posts' => $post
    ]);
  }

  public function fotos() {
    $this->render('fotos');
  }

  public function foto($params) {
    echo "Acessando a foto: ".$params['id'];
  }

  public function sobre() {
      $this->render('sobre');
  }

  public function sobreP($args) {
    echo "Opa ".$args['nome'];
  }

}