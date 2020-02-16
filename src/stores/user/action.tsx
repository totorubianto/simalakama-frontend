import { GET_USER, UPDATE_PROFILE, UPLOAD_AVATAR, UPDATE_PASSWORD } from '../types';

import { clearErrors, errorAction } from '../global/action';
import axios from 'axios';
import { loadUser } from '../auth/action';
import { GlobalHelper } from '../../config/config';

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
        const res = await axios.post(`${GlobalHelper.API_URL}/api/users/update`, body, config);
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data,
        });
        dispatch(loadUser());
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
        const res = await axios.post(`${GlobalHelper.API_URL}/api/users/upload-avatar`, formData);

        dispatch({
            type: UPLOAD_AVATAR,
            payload: res.data,
        });
        dispatch(loadUser());
    } catch (err) {
        dispatch(errorAction(err));
    }
};

//update password
export const updatePassword = ({
    oldPassword,
    newPassword,
    newPasswordConfirmation,
}: any) => async (dispatch: any) => {
    dispatch(clearErrors());
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const body = JSON.stringify({ oldPassword, newPassword, newPasswordConfirmation });

    try {
        const res = await axios.post(
            `${GlobalHelper.API_URL}/api/users/update-password`,
            body,
            config,
        );
        dispatch({
            type: UPDATE_PASSWORD,
            payload: res.data,
        });
    } catch (err) {
        dispatch(errorAction(err));
    }
};

export const getUser = (id: string) => async (dispatch: any) => {
    try {
        const res = await axios.get(`${GlobalHelper.API_URL}/api/users/find-all`);
        dispatch({
            type: GET_USER,
            payload: res.data,
        });
    } catch (err) {
        dispatch(errorAction(err));
    }
};
