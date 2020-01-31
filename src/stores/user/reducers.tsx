import { USER_LOADING, GET_USERS } from '../types';
import { UserState } from './interfaces/user.interface';
import { UserTypes } from './interfaces/update.interface';
const initialState: UserState = {
    loading: true,
    user: {},
    users: [],
};
export function userReducer(state = initialState, action: UserTypes): UserState {
    const { type, payload } = action;
    switch (type) {
        case USER_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_USERS:
            return {
                ...state,
                users: payload,
            };

        default:
            return state;
    }
}
