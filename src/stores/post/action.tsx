import { GET_POSTS } from '../types';
import { errorAction } from '../global/action';
import axios from 'axios';
import { GlobalHelper } from '../../config/config';
import setAuthToken from '../../utils/setAuthToken';

export const getPosts = () => async (dispatch: any) => {
    try {
        if (localStorage.accessToken) {
            await setAuthToken(localStorage.accessToken);
        }
        const res = await axios.get(`${GlobalHelper.API_URL}/api/posts/get-posts`);
        dispatch({
            type: GET_POSTS,
            payload: res.data,
        });
    } catch (err) {
        dispatch(errorAction(err));
    }
};
