import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { authReducer } from './auth/reducers';
import { alertReducer } from './alert/reducers';
const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const middlewares = [thunkMiddleware];
const middleWareEnhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

export default store;
