import { useState } from 'react';

export function App() {
  const [color, setColor] = useState('red');
  const [padding, setPadding] = useState(10);

  function handleClick() {
    setColor('green');
    setPadding(20);
  }

  return (
    <div>
      <button
        onClick={ handleClick }
        style={{ backgroundColor: color, color: 'white', border: 'none', padding }}
      >click here</button>
    </div>
  );
}