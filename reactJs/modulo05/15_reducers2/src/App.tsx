import { useReducer } from 'react';

interface reducerState {
  count: number;
}
interface reducerAction {
  type: string;
}

const initialState = { count: 0 };

export function App() {
  const [state, dispatch] = useReducer((state: reducerState, action: reducerAction) => {
    switch(action.type) {
      case 'ADD':
        return { ...state, count: state.count + 1 };
      case 'DEL':
        if (state.count > 0) {
          return { ...state, count: state.count - 1 };
        }
      case 'RESET':
        return initialState;
    }
    return state;
  }, initialState);

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
