import { GET_POST, GET_POSTS } from '../types';
const initialState = {
    loading: true,
    user: {},
    posts: [],
};
export function postReducer(state = initialState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case GET_POST:
            return {
                ...state,
                loading: true,
            };
        case GET_POSTS:
            return {
                ...state,
                posts: payload.data.posts,
            };
        default:
            return state;
    }
}
