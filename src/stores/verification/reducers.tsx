import { FORGOT_PASSWORD_SUCCESS } from '../types';
const initialState: any = {
    loading: true,
    verification: {},
};
export function verificationReducer(state = initialState, action: any): any {
    const { type, payload } = action;
    switch (type) {
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                verification: payload.data
            };

        default:
            return state;
    }
}
