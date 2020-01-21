import {
    // GET_PROFILE,
    // GET_PROFILES,
    UPDATE_PROFILE,
    UPLOAD_AVATAR,
    // CLEAR_PROFILE,
    // PROFILE_ERROR,
    // ACCOUNT_DELETED
} from '../types';
import { clearErrors, errorAction } from '../global/action';
import axios from 'axios';
import { loadUser } from '../auth/action';

// Updated User
export const updateProfile = ({ firstName, lastName, email }: any) => async (dispatch: any) => {
    dispatch(clearErrors());
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const body = JSON.stringify({ firstName, lastName, email });
    try {
        const res = await axios.post(
            'https://simalakama.herokuapp.com/api/users/update',
            body,
            config,
        );
        dispatch(loadUser());
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        dispatch(errorAction(err));
    }
};

// Updated Avatar
export const updateAvatar = (file: any) => async (dispatch: any) => {
    dispatch(clearErrors());
    let formData = new FormData();
    formData.append('avatar', file);
    try {
        const res = await axios.post(
            'https://simalakama.herokuapp.com/api/users/upload-avatar',
            formData,
        );
        dispatch(loadUser());
        dispatch({
            type: UPLOAD_AVATAR,
            payload: res.data,
        });
    } catch (err) {
        dispatch(errorAction(err));
    }
};
