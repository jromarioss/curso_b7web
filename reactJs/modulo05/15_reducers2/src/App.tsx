import { useReducer } from 'react';

type reducerState = {
  count: number;
}
type reducerAction = {
  type: string;
}

const initialState = { count: 0 };
const reducer = (state: reducerState, action: reducerAction) => {
  switch(action.type) {
    case 'ADD':
      return { ...state, count: state.count + 1 };
      break;
    case 'DEL':
      if (state.count > 0) {
        return { ...state, count: state.count - 1 };
      }
      break;
    case 'RESET':
      return initialState;
      break;
  }
  return state;
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-5">
      <p>Contagem: { state.count }</p>
      <hr />
      <button className="p-2 border-2 rounded mt-2 mr-2" onClick={ () => dispatch({ type: 'ADD' })}>Adicionar</button>
      <button className="p-2 border-2 rounded mt-2 mr-2" onClick={ () => dispatch({ type: 'DEL' })}>Remover</button>
      <button className="p-2 border-2 rounded mt-2 mr-2" onClick={ () => dispatch({ type: 'RESET' })}>Remover</button>
    </div>
  );
}

export default App;