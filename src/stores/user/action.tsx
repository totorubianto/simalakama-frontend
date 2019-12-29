import {
  GET_PROFILE,
  GET_PROFILES,
  UPDATE_PROFILE,
  UPLOAD_AVATAR,
  CLEAR_PROFILE,
  PROFILE_ERROR,
  ACCOUNT_DELETED
} from "../types";
import { clearErrors, errorAction } from "../global/action";
import axios from "axios";
// Register User
export const updateProfile = ({ firstName, lastName, email }: any) => async (
  dispatch: any
) => {
  console.log(firstName, lastName, email);
  dispatch(clearErrors());
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ firstName, lastName, email });
  try {
    const res = await axios.post(
      "https://simalakama.herokuapp.com/api/users/update",
      body,
      config
    );
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch(errorAction(err));
  }
};
