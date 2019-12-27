import {
  USER_LOADING
} from '../types';
import { UserState } from './interfaces/user.interface';
import { UserTypes } from './interfaces/update.interface';
const initialState: UserState = {
  loading: true,
  user: {},
  users: []
};
export function userReducer(
  state = initialState,
  action: UserTypes
): UserState {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
