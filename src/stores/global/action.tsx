import { setAlert } from '../alert/action';
import { GET_ERRORS, CLEAR_ERRORS } from '../types';

export const errorAction = (err: any) => async (dispatch: any) => {
    const errors = err && err.response && err.response.data;
    let error;
    if (errors && typeof errors.message.message !== 'object')
        dispatch(setAlert(errors.message.message, 'danger'));
    if (errors && typeof errors.message.message === 'object' && errors.message.message.length > 0) {
        error = errors.message.message;
        dispatch({
            type: GET_ERRORS,
            payload: error,
        });
    }
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
    };
};
