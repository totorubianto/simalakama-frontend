import { GET_PENDING_FRIEND } from '../types';
import { errorAction } from '../global/action';
import axios from 'axios';

export const getPendingFriend = () => async (dispatch: any) => {
    try {
        const res = await axios.get(
            'https://simalakama.herokuapp.com/api/friends/get-friend?status=PENDING',
        );
        dispatch({
            type: GET_PENDING_FRIEND,
            payload: res.data,
        });
    } catch (err) {
        dispatch(errorAction(err));
    }
};
