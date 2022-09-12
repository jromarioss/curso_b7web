import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Person = {
  id: string;
  name: string;
}

type ActionType = {
  type: string;
  payload?: {
    id?: string;
    name?: string;
  }
}

const initialState: Person[] = [];

const reducer = (state: Person[], action: ActionType) => {
  switch(action.type) {
    case 'ADD':
      if (action.payload?.name) {
        const newState = [...state]
        newState.push({ 
          id: uuidv4(), 
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
      break;
  }

  return state;
}

export const usePeopleList = () => {
  return useReducer(reducer, initialState);
};