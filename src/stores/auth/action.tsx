import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_PROFILE,
    // CLEAR_ERRORS,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
} from '../types';
import { errorAction, clearErrors } from '../global/action';
import setAuthToken from '../../utils/setAuthToken';

// Load User
export const loadUser = () => async (dispatch: any) => {
    if (localStorage.token) {
        await setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('https://simalakama.herokuapp.com/api/users/me');
        dispatch({
            type: USER_LOADED,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
        });
    }
};

// Register User
export const register = ({
    firstName,
    lastName,
    email,
    password,
    passwordConfirmation,
}: any) => async (dispatch: any) => {
    dispatch(clearErrors());
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const role = 'user';
    const body = JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        role,
        passwordConfirmation,
    });
    try {
        const res = await axios.post(
            'https://simalakama.herokuapp.com/api/users/register',
            body,
            config,
        );
        dispatch(loadUser());
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch(errorAction(err));
        dispatch({
            type: REGISTER_FAIL,
        });
    }
};

// Login User
export const login = ({ email, password }: any) => async (dispatch: any) => {
    dispatch(clearErrors());
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const body = JSON.stringify({ email, password });
    try {
        const res = await axios.post(
            'https://simalakama.herokuapp.com/api/users/login',
            body,
            config,
        );
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
        dispatch(loadUser());
    } catch (err) {
        dispatch(errorAction(err));
        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

// request forgot password
export const requestForgotPassword = ({ email }: any) => async (dispatch: any) => {
    console.log(email, 'diaction');
    dispatch(clearErrors());
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const body = JSON.stringify({ email });
    try {
        const res = await axios.post(
            'https://simalakama.herokuapp.com/api/users/request-forgot-password',
            body,
            config,
        );

        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: res.data,
        });

        dispatch(loadUser());
    } catch (err) {
        dispatch(errorAction(err));
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
        });
    }
};

// request forgot password
export const forgotPassword = (token: any, { newPassword, newPasswordConfirmation }: any) => async (
    dispatch: any,
) => {
    dispatch(clearErrors());
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const body = JSON.stringify({ newPassword, newPasswordConfirmation });
    try {
        const res = await axios.post(
            `https://simalakama.herokuapp.com/api/users/forgot-password/${token}`,
            body,
            config,
        );

        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch(errorAction(err));
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
        });
    }
};

// request forgot password
export const verify = (id: any) => async (dispatch: any) => {
    dispatch(clearErrors());
    try {
        const res = await axios.get(`https://simalakama.herokuapp.com/api/users/verify/${id}`);

        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: res.data,
        });

        dispatch(loadUser());
    } catch (err) {
        dispatch(errorAction(err));
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
        });
    }
};

// Logout / Clear Profile
export const logout = () => async (dispatch: any) => {
    await axios.post(`https://simalakama.herokuapp.com/api/users/logout`);
    dispatch({ type: CLEAR_PROFILE });
    dispatch({ type: LOGOUT });
};

// Logout / Clear Profile
export const logoutAll = () => async (dispatch: any) => {
    await axios.post(`https://simalakama.herokuapp.com/api/users/logout-all`);
    dispatch({ type: CLEAR_PROFILE });
    dispatch({ type: LOGOUT });
};
