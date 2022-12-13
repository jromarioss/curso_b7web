import { useState } from 'react';

export function App() {
  const [name, setName] = useState('José');

  function handleButtonClick() {
    setName('Pedro');
  }

  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={handleButtonClick}>Click here</button>
    </div>
  );
}