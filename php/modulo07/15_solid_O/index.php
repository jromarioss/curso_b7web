<?php
  interface Remuneravel {
    public function remuneração();
  }

  class Contratoclt implements Remuneravel {

    public function remuneração() {}

  }

  class Estagio implements Remuneravel {

    public function remuneração() {}

  }

  class Contratopj implements Remuneravel {

    public function remuneração() {}

  }

  class Contratointernacional implements Remuneravel {

    public function remuneração() {}

  }

  class FolhaDePagamento {

    public function calcular(Remuneravel $funcionario) {
      return $funcionario->remuneração();
    }

  }
?>
