import { GET_PENDING_FRIEND } from '../types';

const initialState: any = {
    loading: false,
    users: [],
};

export function friendReducer(state = initialState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case GET_PENDING_FRIEND:
            return {
                ...state,
                loading: true,
                users: payload.data,
            };

        default:
            return state;
    }
}
