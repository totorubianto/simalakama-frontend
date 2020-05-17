import { GET_MESSAGES_LOADED, GET_MESSAGES_LOADING, GET_MESSAGES_MORE_LOADED } from '../types';

const initialState: any = {
    loading: true,
    message: [],
};

export function messageReducer(state = initialState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case GET_MESSAGES_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_MESSAGES_LOADED:
            return {
                ...state,
                loading: false,
                message: payload.data.messages,
            };
        case GET_MESSAGES_MORE_LOADED:
            return {
                ...state,
                loading: false,
                message: [...state.message, payload],
            };

        default:
            return state;
    }
}
