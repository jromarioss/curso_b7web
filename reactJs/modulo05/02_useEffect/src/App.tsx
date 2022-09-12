import { useEffect, useState, ChangeEvent } from 'react';

const App = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(`${name} ${lastName}`)
  }, [name, lastName]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  return (
    <div className="flex flex-col">
      <input type="text" value={ name } placeholder="Digite seu nome" onChange={ handleNameChange } />
      <input type="text" value={ lastName } placeholder="Digite seu sobrenome" onChange={ handleLastNameChange } />
      <p>Nome completo: { fullName }</p>
    </div>
  );
}

export default App;