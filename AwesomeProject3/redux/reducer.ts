import {ADD_TO_CART, REMOVE_FROM_CART} from './constants';

const initialState: any = [];
export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      state.forEach((element: any) => {
        if (element.name === action.payload.name) {
          state.splice(state.indexOf(element), 1);
        }
      });
      return [...state];
    default:
      return state;
  }
};
