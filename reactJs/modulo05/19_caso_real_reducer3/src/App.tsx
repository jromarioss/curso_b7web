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

  function deletePerson(id: string) {
    dispatch({
      type: 'DEL',
        payload: { id }
    });
  }

  function handleOrderButton() {
    dispatch({ type: 'ORDER' });
  }

  return (
    <div className="p-5">
      <input className="border-2 inline-block mr-2" value={nameInput} type="text" onChange={handleInputChange} />
      <button className="border-2 rounded p-1" onClick={handleAddButton}>add</button>
      <hr />
      <button className="border-2 rounded p-1 m-1" onClick={ handleOrderButton }>order</button>
      <hr />
      <h2>People list:</h2>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            { item.name }
            <button className="ml-2 hover:text-red-700" onClick={ () => deletePerson(item.id) }>[ delete ]</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
