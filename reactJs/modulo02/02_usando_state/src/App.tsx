import { useState } from 'react';

const App = () => {
  const [numero, setNumero] = useState(0);
  const [nome, setNome] = useState('José');

  const handleButton = () => {
    setNumero(numero + 1);
  }

  const handleButtonClick = () => {
    setNome('Miguel');
  }

  return (
    <div>
      <button onClick={ handleButton }>Número + 1</button>
      <p>O numero é: { numero }</p>
      <button onClick={ handleButtonClick }>Clique aqui</button>
      <p>Meu nome é: { nome }</p>
    </div>
  );
}

export default App;