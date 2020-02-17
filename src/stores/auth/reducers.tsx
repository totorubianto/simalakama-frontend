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
    //not fix
    LOGOUT,
    ACCOUNT_DELETED,
} from '../types';
import { AuthState } from './interfaces/auth.interface';
import { AuthTypes } from './interfaces/update.interface';
import { checkObject } from '../../components/global/utils/checkObject';

const initialState: AuthState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: {},
};
export function authReducer(state = initialState, action: AuthTypes): AuthState {
    const { type, payload } = action;
    switch (type) {
        case AUTH_LOADING:
        case REGISTER_LOADING:
        case LOGIN_LOADING:
            return {
                ...state,
                loading: true,
            };
        case AUTH_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload.data,
            };
        case REGISTER_LOADED:
            localStorage.setItem('accessToken', payload.data.register.accessToken);
            localStorage.setItem('refreshToken', payload.data.register.refreshToken);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
            };
        case LOGIN_LOADED:
            localStorage.setItem('accessToken', payload.data.login.accessToken);
            if (checkObject('payload.data.login.refreshToken', payload)) {
                localStorage.setItem('refreshToken', payload.data.login.refreshToken);
            }
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
            };
        case AUTH_ERROR:
        case REGISTER_ERROR:
        case LOGIN_ERROR:
        case LOGOUT:
        case ACCOUNT_DELETED:
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
            };
        default:
            return {
                ...state,
            };
    }
}
