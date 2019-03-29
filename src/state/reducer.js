import * as T from './ActionTypes';

const defaultState = {
  name: 'Innit',
  number: 5,
};

export default function NumberReducer(state = defaultState, action) {
  switch (action.type) {
    case T.ADD_NUMBER:
      return {
        ...state,
        number: action.payload.number,
      };
    case T.SUB_NUMBER:
      return {
        ...state,
        number: action.payload.number,
      };
    default:
      return state;
  }
}
