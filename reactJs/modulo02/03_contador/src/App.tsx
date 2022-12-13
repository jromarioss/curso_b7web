import { useState } from 'react';

export function App() {

  const [numero, setNumero] = useState(0);

  function handleMinus() {
    if (numero > 0) {
      setNumero(numero - 1);
    }
  }

  function handleMore() {
    setNumero(numero + 1);
  }

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      <div>{numero}</div>
      <button onClick={handleMore}>+</button>
    </div>
  );
}