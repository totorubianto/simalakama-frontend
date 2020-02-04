import {
    // GET_PROFILE,
    // GET_PROFILES,
    // GET_USERS,
    GET_USER,
    UPDATE_PROFILE,
    UPLOAD_AVATAR,
    // CLEAR_PROFILE,
    // PROFILE_ERROR,
    // ACCOUNT_DELETED
    UPDATE_PASSWORD,
} from '../types';
import { clearErrors, errorAction } from '../global/action';
import axios from 'axios';
import { loadUser } from '../auth/action';
import { setAlert } from '../alert/action';
import { MessageBarType } from 'office-ui-fabric-react';

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
        const res = await axios.post(
            'https://simalakama.herokuapp.com/api/users/upload-avatar',
            formData,
        );

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
            'https://simalakama.herokuapp.com/api/users/update-password',
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

export const addFriend = (id: string) => async (dispatch: any) => {
    try {
        const res = await axios.post(
            `https://simalakama.herokuapp.com/api/friends/add-friend/${id}`,
        );
        console.log(res.data);

        dispatch(setAlert('Permintaan Pertemanan terkirim', MessageBarType.success));
    } catch (err) {
        dispatch(errorAction(err));
    }
};

export const getUser = (id: string) => async (dispatch: any) => {
    try {
        const res = await axios.get('https://simalakama.herokuapp.com/api/users/find-all');
        dispatch({
            type: GET_USER,
            payload: res.data,
        });
    } catch (err) {
        dispatch(errorAction(err));
    }
};
