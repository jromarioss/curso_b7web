import { useReducer } from 'react';

interface reducerState {
  count: number;
}
interface reducerAction {
  type: string;
}

const initialState: reducerState = { count: 0 };

export function useContagem() {
  return useReducer((state: reducerState, action: reducerAction) => {
    switch(action.type) {
      case 'ADD':
        return { ...state, count: state.count + 1 };
      case 'DEL':
        if (state.count > 0) {
          return { ...state, count: state.count - 1 };
        }
        break;
      case 'RESET':
        return initialState;
    }
    return state;
  }, initialState);
}
