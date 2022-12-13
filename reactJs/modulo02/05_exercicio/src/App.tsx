import React, { useState } from 'react';

export function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleChangeLastName(event: React.ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value);
  }

  function handleChangeAge(event: React.ChangeEvent<HTMLInputElement>) {
    setAge(event.target.value);
  }

  return (
    <div>
      <div>
        Name:
        <input type='text' value={name} onChange={handleChangeName} />
      </div>

      <div>
        LastName:
        <input type='text' value={lastName} onChange={handleChangeLastName} />
      </div>

      <div>
        Age:
        <input type='text' value={age} onChange={handleChangeAge} />
      </div>
      <hr/>
      <p>Hello {!name ? <span>---</span> : `${name} ${lastName}`}, how are you?</p>
      <p>You have {!age ? <span>---</span> : age }, years.</p>
    </div>
  );
}