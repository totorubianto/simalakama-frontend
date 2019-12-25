import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { authReducer } from './auth/reducers';
import { alertReducer } from './alert/reducers';
import { errorReducer } from './error/reducers';
import { userReducer } from './user/reducers';
const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  error: errorReducer,
  users: userReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const middlewares = [thunkMiddleware];
const middleWareEnhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

export default store;
