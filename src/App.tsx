import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { Routes } from './router/routes';
import { AppState } from './stores/indexReducer';
import { loadUser } from './stores/auth/action';

interface AppProps {
    auth: any;
    loadUser: any;
}

const App: React.FC<AppProps> = ({ auth, loadUser }) => {
    return (
        <div className="App">
            <Router>
                <Routes />
            </Router>
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { loadUser })(App);
