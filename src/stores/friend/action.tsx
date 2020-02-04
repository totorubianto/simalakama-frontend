import { GET_PENDING_FRIEND, GET_USER_FRIEND } from '../types';
import { errorAction } from '../global/action';
import axios from 'axios';

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
