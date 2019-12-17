import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { loadUser } from "./stores/auth/action";
import { AppState } from "./stores/indexReducer";

export const thunkSendMessage = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const asyncResp = await exampleAPI();
  console.log(asyncResp)
  dispatch(
    loadUser()
  );
};

function exampleAPI() {
  return Promise.resolve("Async Chat Bot");
}
