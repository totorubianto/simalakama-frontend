import {
    GET_POSTS_LOADED,
    GET_POSTS_LOADING,
    GET_POSTS_MORE_LOADING,
    GET_POSTS_MORE_LOADED,
} from '../types';
import { errorAction, auth } from '../global/action';
import axios from 'axios';
import { GlobalHelper } from '../../config/config';

export const getPosts = () => async (dispatch: any) => {
    dispatch(auth());
    try {
        dispatch({ type: GET_POSTS_LOADING, payload: null });
        const res = await axios.get(`${GlobalHelper.API_URL}/api/posts/get-posts`);
        dispatch({ type: GET_POSTS_LOADED, payload: res.data });
    } catch (err) {
        dispatch(errorAction(err));
    }
};

export const getPostsScroll = () => async (dispatch: any) => {
    dispatch(auth());
    try {
        dispatch({ type: GET_POSTS_MORE_LOADING, payload: null });
        const res = await axios.get(`${GlobalHelper.API_URL}/api/posts/get-posts`);
        dispatch({ type: GET_POSTS_MORE_LOADED, payload: res.data });
    } catch (err) {
        dispatch(errorAction(err));
    }
};
