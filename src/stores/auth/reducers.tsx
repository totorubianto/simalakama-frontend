import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
  USER_LOADING
} from '../types';
import { AuthState } from './interfaces/auth.interface';
import { AuthTypes } from './interfaces/update.interface';

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: {}
};
export function authReducer(
  state = initialState,
  action: AuthTypes
): AuthState {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.data
      };
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.data.register.accessToken);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.data.login.accessToken);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
    case ACCOUNT_DELETED:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    default:
      return state;
  }
}
