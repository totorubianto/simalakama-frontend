import { GET_PENDING_FRIEND, GET_USER_FRIEND, ADD_FRIEND } from '../types';
import { errorAction } from '../global/action';
import axios from 'axios';
import { setAlert } from '../alert/action';
import { MessageBarType } from 'office-ui-fabric-react';
import { GlobalHelper } from '../../config/config';

export const getPendingFriend = () => async (dispatch: any) => {
    try {
        const res = await axios.get(`${GlobalHelper.API_URL}/api/friends/get-pending`);
        dispatch({
            type: GET_PENDING_FRIEND,
            payload: res.data,
        });
    } catch (err) {
        dispatch(errorAction(err));
    }
};

export const getUsersFriend = () => async (dispatch: any) => {
    try {
        const res = await axios.get(`${GlobalHelper.API_URL}/api/friends/get-all`);

        dispatch({
            type: GET_USER_FRIEND,
            payload: res.data,
        });
    } catch (err) {
        dispatch(errorAction(err));
    }
};

export const addFriend = (id: string) => async (dispatch: any) => {
    try {
        const res = await axios.post(`${GlobalHelper.API_URL}/api/friends/add-friend/${id}`);
        dispatch(setAlert('Permintaan Pertemanan terkirim', MessageBarType.success));
        dispatch({
            type: ADD_FRIEND,
            payload: res.data,
        });
    } catch (err) {
        dispatch(errorAction(err));
    }
};

export const confirmFriend = (id: any) => async (dispatch: any) => {
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
    try {
        await axios.post(`${GlobalHelper.API_URL}/api/friends/reject/${id}`);
        dispatch(getUsersFriend());
        dispatch(getPendingFriend());
        dispatch(setAlert('Anda telah membatalkan pertemanan', MessageBarType.success));
    } catch (err) {
        dispatch(errorAction(err));
    }
};
