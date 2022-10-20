<?php
  class Calculadora {
    public float $n = 0;

    public function add(float $num) {
      $this-> n += $num;
    }

    public function sub(float $num) {
      $this-> n -= $num;
    }

    public function mult(float $num) {
      $this -> n *= $num;
    }

    public function div(float $num) {
      $this->n /= $num ;
    }

    public function total() {
      return $this-> n;
    }

    public function clear() {
      $this->n = 0;
    }
  }
?>