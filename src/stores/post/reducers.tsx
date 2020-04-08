import {
    GET_POSTS_LOADING,
    GET_POSTS_LOADED,
    GET_POSTS_MORE_LOADED,
    GET_POSTS_MORE_LOADING,
    CREATE_POSTS_LOADING,
    CREATE_POSTS_LOADED,
} from '../types';
const initialState = {
    loading: true,
    user: {},
    posts: [],
    countPosts: 0,
};

export function postReducer(state = initialState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_POSTS_LOADING:
        case GET_POSTS_LOADING:
        case GET_POSTS_MORE_LOADING:
            return {
                ...state,
                loading: true,
            };
        case CREATE_POSTS_LOADED:
            return {
                ...state,
                loading: false,
                posts: [payload.data.post, ...state.posts],
                countPosts: state.countPosts + 1,
            };
        case GET_POSTS_LOADED:
            return {
                ...state,
                loading: false,
                posts: payload.data.posts,
                countPosts: payload.data.count,
            };
        case GET_POSTS_MORE_LOADED:
            return {
                ...state,
                loading: false,
                posts: state.posts
                    .concat(payload.data.posts)
                    .filter((v: any, i, a) => a.findIndex((t: any) => t._id === v._id) === i),
                countPosts: payload.data.count,
            };
        default:
            return state;
    }
}
