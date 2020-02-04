import { GET_PENDING_FRIEND, GET_USER_FRIEND, CONFIRM_FRIEND } from '../types';

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
                request: payload.data.users,
            };
        case GET_USER_FRIEND:
            return {
                ...state,
                users: payload.data.users,
            };
        case CONFIRM_FRIEND:
            console.log(payload.data.friend._id);
            return {
                ...state,
                request: [
                    state.request.filter((item: any) => item._id !== payload.data.friend._id),
                ],
            };
        default:
            return state;
    }
}
