import { GET_ERRORS, CLEAR_ERRORS } from '../types';

const initialState: any = [];

export function errorReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}
