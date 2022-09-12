import { ChangeEvent, useState } from 'react';
import { usePeopleList } from './hooks/peopleList';
const App = () => {
  const [list, dispatch] = usePeopleList();
  const [nameInput, setNameInput] = useState('');

  const handleAddButton = () => {
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  }

  return (
    <div className="p-5">
      <input className="border-2 inline-block mr-2" value { nameInput } type="text" onChange={ handleInputChange } />
      <button className="border-2 rounded p-1" onClick={ handleAddButton }>Adicionar</button>
      <hr />
      <h2>Lista de pessoas:</h2>
      <ul>
        {list.map((item, index) => (
          <li key={ index }>{ item.name }</li>
        ))}
      </ul>
    </div>
  );
}

export default App;