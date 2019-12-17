import axios from 'axios';
import { setAlert } from '../alert/action';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
  CLEAR_ERRORS,
  GET_ERRORS
} from '../types';
import setAuthToken from '../../utils/setAuthToken';

// Load User
export const loadUser = () => async (dispatch:any) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('https://simalakama.herokuapp.com/api/users/me');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = ({ name, email, password }:any) => async (dispatch:any) => {
  console.log(name, email, password)
  dispatch(clearErrors());
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const role = 'user';

  const body = JSON.stringify({ name, email, password, role });

  try {
    const res = await axios.post(
      'https://simalakama.herokuapp.com/api/users/register',
      body,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    let error;
    if (errors && typeof errors.message.message !== 'object')
      dispatch(setAlert(errors.message.message, 'danger'));
    if (
      errors &&
      typeof errors.message.message === 'object' &&
      errors.message.message.length > 0
    ) {
      error = errors.message.message;
      dispatch({
        type: GET_ERRORS,
        payload: error
      });
    }

    //   errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email:string, password:string) => async (dispatch:any) => {
  dispatch(clearErrors());
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(
      'https://simalakama.herokuapp.com/api/users/login',
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    let error;
    if (errors && typeof errors.message.message !== 'object')
      dispatch(setAlert(errors.message.message, 'danger'));
    if (
      errors &&
      typeof errors.message.message === 'object' &&
      errors.message.message.length > 0
    ) {
      error = errors.message.message;
      dispatch({
        type: GET_ERRORS,
        payload: error
      });
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout / Clear Profile
export const logout = () => (dispatch:any) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};


// import { SystemState, UPDATE_SESSION } from './types';

// function updateSession(newSession: SystemState) {
//   return {
//     type: UPDATE_SESSION,
//     payload: newSession
//   };
// }

// export { updateSession };


