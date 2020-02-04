import { GET_PENDING_FRIEND, GET_USER_FRIEND } from '../types';

const initialState: any = {
    loading: false,
    users: [],
    request: [],
};

export function friendReducer(state = initialState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case GET_PENDING_FRIEND:
            return {
                ...state,
                loading: true,
                request: payload.data,
            };
        case GET_USER_FRIEND:
            return {
                ...state,
                users: payload,
            };

        default:
            return state;
    }
}
