import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  return (
    <div>
      <label>Nome: </label>
      <input type="text" value={ name } onChange={ handleInput } />
      <hr />
      <p>Seu nome: { name }</p>
    </div>
  );
}

export default App;