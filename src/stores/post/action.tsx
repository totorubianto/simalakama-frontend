import { GET_POSTS_LOADED, GET_POSTS_LOADING } from '../types';
import { errorAction } from '../global/action';
import axios from 'axios';
import { GlobalHelper } from '../../config/config';

export const getPosts = () => async (dispatch: any) => {
    try {
        dispatch({ type: GET_POSTS_LOADING, payload: null });
        const res = await axios.get(`${GlobalHelper.API_URL}/api/posts/get-posts`);
        dispatch({ type: GET_POSTS_LOADED, payload: res.data });
    } catch (err) {
        dispatch(errorAction(err));
    }
};
