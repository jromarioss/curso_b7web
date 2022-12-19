import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Person {
  id: string;
  name: string;
}

interface ActionType {
  type: string;
  payload?: {
    id?: string;
    name?: string;
  }
}

const initialState: Person[] = [];

export function usePeopleList() {
  return useReducer((state: Person[], action: ActionType) => {
    switch(action.type) {
      case 'ADD':
        if (action.payload?.name) {
          const newState = [...state];
          newState.push({ 
            id: uuidv4(), 
            name: action.payload?.name 
          });
          return newState;
        }
        break;
      case 'DEL':
        if (action.payload?.id) {
          state = state.filter(item => item.id !== action.payload?.id);
        }
          break;
      case 'ORDER':
        state = state.sort((a, b) => (a.name > b.name) ? 1 : -1);
          break;
    }
  
    return state;
  }, initialState);
};
