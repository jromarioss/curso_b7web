<?php
namespace src\controllers;

use \core\Controller;

class HomeController extends Controller {

  public function index() {
    $this->render('home', ['nome' => 'José Romário', 'sobrenome' => 'Santos']);
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