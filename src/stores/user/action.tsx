import {
    UPDATE_PROFILE_LOADING,
    UPDATE_PROFILE_LOADED,
    UPLOAD_AVATAR_LOADED,
    UPLOAD_AVATAR_LOADING,
    UPDATE_PASSWORD,
} from '../types';

import { clearErrors, errorAction, auth } from '../global/action';
import axios from 'axios';
import { loadUser } from '../auth/action';
import { GlobalHelper } from '../../config/config';

// Updated User
export const updateProfile = ({ firstName, lastName, email }: any) => async (dispatch: any) => {
    dispatch(auth());
    dispatch(clearErrors());
    const body = { firstName, lastName, email };
    try {
        dispatch({ type: UPDATE_PROFILE_LOADING, payload: null });
        const res = await axios.post(`${GlobalHelper.API_URL}/api/users/update`, body);
        dispatch({ type: UPDATE_PROFILE_LOADED, payload: res.data });
    } catch (err) {
        dispatch(errorAction(err));
    }
};

// Updated Avatar
export const updateAvatar = (file: any) => async (dispatch: any) => {
    dispatch(auth());
    dispatch(clearErrors());
    let formData = new FormData();
    formData.append('avatar', file);
    try {
        dispatch({ type: UPLOAD_AVATAR_LOADING, payload: null });
        const res = await axios.post(`${GlobalHelper.API_URL}/api/users/upload-avatar`, formData);
        dispatch({ type: UPLOAD_AVATAR_LOADED, payload: res.data });
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
    dispatch(auth());
    dispatch(clearErrors());
    const body = { oldPassword, newPassword, newPasswordConfirmation };
    try {
        const res = await axios.post(`${GlobalHelper.API_URL}/api/users/update-password`, body);
        dispatch({ type: UPDATE_PASSWORD, payload: res.data });
    } catch (err) {
        dispatch(errorAction(err));
    }
};

// export const getUser = (id: string) => async (dispatch: any) => {
//     try {
//         const res = await axios.get(`${GlobalHelper.API_URL}/api/users/find-all`);
//         dispatch({
//             type: GET_USER,
//             payload: res.data,
//         });
//     } catch (err) {
//         dispatch(errorAction(err));
//     }
// };
