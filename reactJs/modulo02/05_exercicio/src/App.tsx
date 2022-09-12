import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }
  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  }

  return (
    <div>
      <label>Nome: </label>
      <input type="text" onChange={ handleName } /><br />
      <label>Sobre Nome: </label>
      <input type="text" onChange={ handleLastName } /><br />
      <label>Idade: </label>
      <input type="number" onChange={ handleAge } /><br />
      <hr />
      <p>Olá {`${name} ${lastName}`}, tudo bem?</p>
      <p>Você tem { age }.</p>
    </div>
  );
}

export default App;