import { useReducer } from 'react';
import { v4 as uuidV4 } from 'uuid';

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

export const usePeopleList = () => {
  return useReducer((state: Person[], action: ActionType) => {
    switch(action.type) {
      case 'ADD':
        if (action.payload?.name) {
          const newState = [...state];
          newState.push({ 
            id: uuidV4(), 
            name: action.payload?.name 
          });
          return newState;
        }
        break;
      case 'DEL':
        if (action.payload?.id) {
          let newState = [...state];
          newState = newState.filter(item => item.id !== action.payload?.id);
          return newState;
        }
        break;
      case 'ORDER':
        let newState = [...state];
        newState = newState.sort((a, b) => (a.name > b.name) ? 1 : -1);
        return newState;
    }
  
    return state;
  }, initialState);
};
