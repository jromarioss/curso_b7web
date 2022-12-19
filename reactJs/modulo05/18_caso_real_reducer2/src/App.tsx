import { ChangeEvent, useState } from 'react';
import { usePeopleList } from './reducers/peopleList';

export function App() {
  const [list, dispatch] = usePeopleList();
  const [nameInput, setNameInput] = useState('');

  function handleAddButton() {
    if (nameInput) {
      dispatch({
        type: 'ADD',
        payload: {
          name: nameInput
        }
      });
      setNameInput('');
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNameInput(event.target.value);
  }

  return (
    <div className="p-5">
      <input className="border-2 inline-block mr-2" value={ nameInput } type="text" onChange={ handleInputChange } />
      <button className="border-2 rounded p-1" onClick={ handleAddButton }>Adicionar</button>
      <hr />
      <h2>Lista de pessoas:</h2>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
