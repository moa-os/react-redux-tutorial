import * as T from './actionTypes';

export function addNumber(number) {
  return {
    type: T.ADD_NUMBER,
    payload: { number },
  };
}

export function subNumber(number) {
  return {
    type: T.SUB_NUMBER,
    payload: { number },
  };
}

export function getNumber() {
  return {
    type: T.GET_NUMBER,
  };
}
