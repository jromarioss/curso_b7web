import { useState } from 'react';

const App = () => {
  const [numero, setNumero] = useState(0);

  const handleLess = () => {
    setNumero(numero - 1);
  }

  const handleMore = () => {
    setNumero(numero + 1);
  }

  return (
    <div>
      <button onClick={ handleLess }>-</button>
      <p>{ numero }</p>
      <button onClick={ handleMore }>+</button>
    </div>
  );
}

export default App;