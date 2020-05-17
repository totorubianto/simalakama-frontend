import { GET_MESSAGES_LOADED, GET_MESSAGES_LOADING, GET_MESSAGES_MORE_LOADED } from '../types';
import { errorAction, auth } from '../global/action';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getMessages = (id: string) => async (dispatch: any) => {
    dispatch(auth());
    try {
        dispatch({ type: GET_MESSAGES_LOADING, payload: null });
        if (id) {
            const res = await axios.get(`${API_URL}/api/messages/gets/${id}`);
            dispatch({ type: GET_MESSAGES_LOADED, payload: res.data });
        }
    } catch (err) {
        dispatch(errorAction(err));
    }
};

export const create = (message: string, to: string) => async (dispatch: any) => {
    console.log('jadu');
    dispatch(auth());
    try {
        dispatch({ type: GET_MESSAGES_LOADING, payload: null });
        if (message !== '') {
            const messageData = {
                message: message,
                to: to,
            };
            await axios.post(`${API_URL}/api/messages/create`, messageData);
            // dispatch({ type: GET_MESSAGES_LOADED, payload: res.data });
        }
    } catch (err) {
        dispatch(errorAction(err));
    }
};

export const getMessagesMore = (any: any) => async (dispatch: any) => {
    dispatch(auth());
    dispatch({ type: GET_MESSAGES_MORE_LOADED, payload: any });
};
