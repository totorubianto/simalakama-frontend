import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from "react-redux";
import { Routes } from './router/router';
import { AppState } from "./stores/indexReducer";
import setAuthToken from './utils/setAuthToken';
import { thunkSendMessage } from "./thunk";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App: React.FC = () => {
  useEffect(() => {
    thunkSendMessage()
  }, []);
  return (
      <div className='App'>
        <button onClick={()=>thunkSendMessage()}>asdfas</button>
        <Router>
          <Routes />
        </Router>
      </div>
  );
};


const mapStateToProps = (state: AppState) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { thunkSendMessage }
)(App);

