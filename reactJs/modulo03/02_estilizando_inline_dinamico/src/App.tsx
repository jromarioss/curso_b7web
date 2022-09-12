import { useState } from 'react';

const App = () => {
  const [color, setColor] = useState('red');
  const [padding, setPadding] = useState(0);

  const handleClick = () => {
    setColor('green');
    setPadding(20)
  }

  return (
    <div>
      <button
        onClick={ handleClick }
        style={{ backgroundColor: color, color: 'white', border: 'none', padding }}
      >clique aqui</button>
    </div>
  );
}

export default App;