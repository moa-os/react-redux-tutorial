import * as T from './ActionTypes';

export function addNumber(payload) {
  return {
    type: T.ADD_NUMBER,
    payload: payload.number,
  };
}

export function subNumber(payload) {
  return {
    type: T.SUB_NUMBER,
    payload: payload.number,
  };
}
