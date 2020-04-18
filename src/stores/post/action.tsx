import {
    GET_POSTS_LOADED,
    GET_POSTS_LOADING,
    GET_POSTS_MORE_LOADING,
    GET_POSTS_MORE_LOADED,
    CREATE_POSTS_LOADING,
    CREATE_POSTS_LOADED,
} from '../types';
import { errorAction, auth } from '../global/action';
import axios from 'axios';
import { GlobalHelper } from '../../config/config';

export const createPost = (
    [contents, hashtag, mention, scope]: any,
    images: any,
    limit: number,
    skip: number,
) => async (dispatch: any) => {
    dispatch(auth());
    let body = new FormData();
    for (const key of Object.keys(images)) {
        body.append('images', images[key]);
    }
    for (let i = 0; i < hashtag.length; i++) {
        body.append('hashtag[]', hashtag[i]);
    }
    for (let i = 0; i < mention.length; i++) {
        body.append('mention[]', mention[i]);
    }
    body.append('contents', contents);
    body.append('scope', scope);
    try {
        dispatch({ type: CREATE_POSTS_LOADING, payload: null });
        const res = await axios.post(`${GlobalHelper.API_URL}/api/posts/create`, body);
        dispatch({ type: CREATE_POSTS_LOADED, payload: res.data });
    } catch (err) {
        dispatch(errorAction(err));
    }
};

export const getPosts = (limit: number, skip: number) => async (dispatch: any) => {
    dispatch(auth());
    try {
        dispatch({ type: GET_POSTS_LOADING, payload: null });
        const res = await axios.get(
            `${GlobalHelper.API_URL}/api/posts/get-posts?skip=${skip}&limit=${limit}`,
        );
        dispatch({ type: GET_POSTS_LOADED, payload: res.data });
    } catch (err) {
        dispatch(errorAction(err));
    }
};

export const getPostsScroll = (limit: number, skip: number) => async (dispatch: any) => {
    dispatch(auth());
    try {
        dispatch({ type: GET_POSTS_MORE_LOADING, payload: null });
        const res = await axios.get(
            `${GlobalHelper.API_URL}/api/posts/get-posts?skip=${skip}&limit=${limit}`,
        );
        dispatch({ type: GET_POSTS_MORE_LOADED, payload: res.data });
    } catch (err) {
        dispatch(errorAction(err));
    }
};
