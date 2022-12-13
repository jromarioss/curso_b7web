import React, { useState } from 'react';

export function App() {
  const [name, setName] = useState('');

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <div>
      Nome:
      <input type='text' value={name} onChange={handleInput} />
      <hr/>
      Seu nome é: {name}
    </div>
  );
}