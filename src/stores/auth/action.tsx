import axios from 'axios';
import {
    AUTH_LOADING,
    AUTH_LOADED,
    AUTH_ERROR,
    REGISTER_LOADING,
    REGISTER_LOADED,
    REGISTER_ERROR,
    LOGIN_LOADING,
    LOGIN_LOADED,
    LOGIN_ERROR,
    //err
    LOGOUT,
    CLEAR_PROFILE,
    // CLEAR_ERRORS,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
} from '../types';
import { errorAction, clearErrors } from '../global/action';
import setAuthToken from '../../utils/setAuthToken';
import { MessageBarType } from 'office-ui-fabric-react';
import { setAlert } from '../alert/action';

const API_URL = process.env.REACT_APP_API_URL;
// Load User
export const loadUser = () => async (dispatch: any) => {
    if (localStorage.accessToken) {
        await setAuthToken(localStorage.accessToken);
    }
    try {
        dispatch({ type: AUTH_LOADING, payload: null });
        const res = await axios.get(`${API_URL}/api/users/me`);
        dispatch({ type: AUTH_LOADED, payload: res.data });
    } catch (err) {
        dispatch({ type: AUTH_ERROR });
    }
    return {};
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
    const role = 'user';
    const body = { firstName, lastName, email, password, role, passwordConfirmation };
    try {
        dispatch({ type: REGISTER_LOADING, payload: null });
        const res = await axios.post(`${API_URL}/api/users/register`, body);
        dispatch({ type: REGISTER_LOADED, payload: res.data });
    } catch (err) {
        dispatch(errorAction(err));
        dispatch({ type: REGISTER_ERROR });
    }
    return {};
};

// Login User
export const login = ({ email, password, keepLogin }: any) => async (dispatch: any) => {
    dispatch(clearErrors());
    const body = { email, password, keepLogin };
    try {
        dispatch({ type: LOGIN_LOADING, payload: null });
        const res = await axios.post(`${API_URL}/api/users/login`, body);
        dispatch({ type: LOGIN_LOADED, payload: res.data });
    } catch (err) {
        dispatch(errorAction(err));
        dispatch({ type: LOGIN_ERROR });
    }
    return {};
};

// request forgot password
export const requestForgotPassword = ({ email }: any) => async (dispatch: any) => {
    dispatch(clearErrors());
    const body = { email };
    try {
        const res = await axios.post(`${API_URL}/api/users/request-forgot-password`, body);
        dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: res.data });
        dispatch(
            setAlert(`Request Forgot Password Terkirim keEmail ${email}`, MessageBarType.success),
        );
    } catch (err) {
        dispatch(errorAction(err));
        dispatch({ type: FORGOT_PASSWORD_FAIL });
    }
    return {};
};

// request forgot password
export const forgotPassword = (token: any, { newPassword, newPasswordConfirmation }: any) => async (
    dispatch: any,
) => {
    dispatch(clearErrors());
    const body = { newPassword, newPasswordConfirmation };
    try {
        const res = await axios.post(`${API_URL}/api/users/forgot-password/${token}`, body);
        dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: res.data });
        dispatch(setAlert(`Password has been change`, MessageBarType.success));
    } catch (err) {
        dispatch(errorAction(err));
        dispatch({ type: FORGOT_PASSWORD_FAIL });
    }
    return {};
};

// request forgot password
export const verify = (id: any) => async (dispatch: any) => {
    dispatch(clearErrors());
    try {
        const res = await axios.get(`${API_URL}/api/users/verify/${id}`);
        dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch(errorAction(err));
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
        });
    }
    return {};
};

// Logout / Clear Profile
export const logout = () => async (dispatch: any) => {
    await axios.post(`${API_URL}/api/users/logout`);
    dispatch({ type: CLEAR_PROFILE });
    dispatch({ type: LOGOUT });
    return {};
};

// Logout all Clear Profile
export const logoutAll = () => async (dispatch: any) => {
    await axios.post(`${API_URL}/api/users/logout-all`);
    dispatch({ type: CLEAR_PROFILE });
    dispatch({ type: LOGOUT });
    return {};
};
