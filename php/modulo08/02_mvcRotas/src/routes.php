<?php
use core\Router;

$router = new Router();

$router->get('/', 'HomeController@index');
$router->get('/fotos', 'HomeController@fotos');

$router->get('/sobre/{nome}', 'HomeController@sobreP');
$router->get('/sobre', 'HomeController@sobre');