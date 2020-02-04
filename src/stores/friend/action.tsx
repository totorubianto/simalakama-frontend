import { GET_PENDING_FRIEND, GET_USER_FRIEND, CONFIRM_FRIEND, ADD_FRIEND } from '../types';
import { errorAction } from '../global/action';
import axios from 'axios';
import { setAlert } from '../alert/action';
import { MessageBarType } from 'office-ui-fabric-react';

export const getPendingFriend = () => async (dispatch: any) => {
    try {
        const res = await axios.get('https://simalakama.herokuapp.com/api/friends/list-pending');
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
        const res = await axios.get('https://simalakama.herokuapp.com/api/friends/find-all');

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
        const res = await axios.post(
            `https://simalakama.herokuapp.com/api/friends/add-friend/${id}`,
        );
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
        const res = await axios.post(`https://simalakama.herokuapp.com/api/friends/confirm/${id}`);
        dispatch(getUsersFriend());
        dispatch(setAlert('anda sekarang berteman', MessageBarType.success));
        dispatch({
            type: CONFIRM_FRIEND,
            payload: res.data,
        });
    } catch (err) {
        dispatch(errorAction(err));
    }
};
