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
      return { ...state, count: state.count - 1 };
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
      
    </div>
  );
}

export default App;