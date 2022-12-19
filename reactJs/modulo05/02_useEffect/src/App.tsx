import { useEffect, useState, ChangeEvent } from 'react';

export function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    setFullName(`${name} ${lastName}`)
  }, [name, lastName]);

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function handleLastNameChange(event: ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value);
  }

  return (
    <div className='flex flex-col'>
      <input type='text' value={ name } placeholder='Digite seu nome' onChange={ handleNameChange } />
      <input type='text' value={ lastName } placeholder='Digite seu sobrenome' onChange={ handleLastNameChange } />
      <p>Nome completo: { fullName }</p>
    </div>
  );
}
