import {
    GET_PENDING_FRIEND_LOADING,
    GET_PENDING_FRIEND_LOADED,
    GET_USER_FRIEND_LOADED,
    GET_USER_FRIEND_LOADING,
    ADD_FRIEND_LOADING,
    ADD_FRIEND_LOADED,
    GET_FRIEND_LOADING,
    GET_FRIEND_LOADED,
    GET_SUGESTION_LOADING,
    GET_SUGESTION_LOADED,
} from '../types';
import { errorAction, auth } from '../global/action';
import axios from 'axios';
import { setAlert } from '../alert/action';
import { MessageBarType } from 'office-ui-fabric-react';
import { GlobalHelper } from '../../config/config';

export const getPendingFriend = () => async (dispatch: any) => {
    dispatch(auth());
    try {
        dispatch({ type: GET_PENDING_FRIEND_LOADING, payload: null });
        const res = await axios.get(`${GlobalHelper.API_URL}/api/friends/get-pending`);
        dispatch({ type: GET_PENDING_FRIEND_LOADED, payload: res.data });
    } catch (err) {
        dispatch(errorAction(err));
    }
};

export const getUsersFriend = () => async (dispatch: any) => {
    dispatch(auth());
    try {
        dispatch({ type: GET_USER_FRIEND_LOADING, payload: null });
        const res = await axios.get(`${GlobalHelper.API_URL}/api/friends/get-all`);
        dispatch({ type: GET_USER_FRIEND_LOADED, payload: res.data });
    } catch (err) {
        dispatch(errorAction(err));
    }
};

export const getFriend = () => async (dispatch: any) => {
    dispatch(auth());
    try {
        dispatch({ type: GET_FRIEND_LOADING, payload: null });
        const res = await axios.get(`${GlobalHelper.API_URL}/api/friends/get-friend`);
        dispatch({ type: GET_FRIEND_LOADED, payload: res.data });
    } catch (err) {
        dispatch(errorAction(err));
    }
};

export const getFriendByUsername = (value: any) => async (dispatch: any) => {
    dispatch(auth());
    try {
        dispatch({ type: GET_SUGESTION_LOADING, payload: null });
        const res = await axios.get(
            `${GlobalHelper.API_URL}/api/friends/get-friend-by-name?filter=${value}`,
        );
        dispatch({ type: GET_SUGESTION_LOADED, payload: res.data });
    } catch (err) {
        dispatch(errorAction(err));
    }
};

export const addFriend = (id: string) => async (dispatch: any) => {
    dispatch(auth());
    try {
        dispatch({ type: ADD_FRIEND_LOADING, payload: null });
        const res = await axios.post(`${GlobalHelper.API_URL}/api/friends/add-friend/${id}`);
        dispatch({ type: ADD_FRIEND_LOADED, payload: res.data });
        dispatch(setAlert('Permintaan Pertemanan terkirim', MessageBarType.success));
    } catch (err) {
        dispatch(errorAction(err));
    }
};

export const confirmFriend = (id: any) => async (dispatch: any) => {
    dispatch(auth());
    try {
        await axios.post(`${GlobalHelper.API_URL}/api/friends/confirm/${id}`);
        dispatch(getUsersFriend());
        dispatch(getPendingFriend());
        dispatch(setAlert('anda sekarang berteman', MessageBarType.success));
    } catch (err) {
        dispatch(errorAction(err));
    }
};

export const rejectFriend = (id: any) => async (dispatch: any) => {
    dispatch(auth());
    try {
        await axios.post(`${GlobalHelper.API_URL}/api/friends/reject/${id}`);
        dispatch(getUsersFriend());
        dispatch(getPendingFriend());
        dispatch(setAlert('Anda telah membatalkan pertemanan', MessageBarType.success));
    } catch (err) {
        dispatch(errorAction(err));
    }
};
