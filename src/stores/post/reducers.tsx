import {
    GET_POSTS_LOADING,
    GET_POSTS_LOADED,
    GET_POSTS_MORE_LOADED,
    GET_POSTS_MORE_LOADING,
} from '../types';
const initialState = {
    loading: true,
    user: {},
    posts: [],
};
export function postReducer(state = initialState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case GET_POSTS_LOADING:
        case GET_POSTS_MORE_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_POSTS_LOADED:
            return {
                ...state,
                loading: false,
                posts: payload.data.posts,
            };
        case GET_POSTS_MORE_LOADED:
            return {
                ...state,
                loading: false,
                posts: state.posts.concat(payload.data.posts),
            };
        default:
            return state;
    }
}
