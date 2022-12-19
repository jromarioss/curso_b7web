import { useEffect, useState } from 'react';

export function App() {
  const [name, setName] = useState('José');

  useEffect(() => {
    alert('Executou');
  }, [name]);

  function handleClick() {
    setName('Pedro');
  }

  return (
    <div>
      <p>nome: { name }</p>
      <button onClick={ handleClick }>Clique aqui</button>
    </div>
  );
}
