import React from 'react';
import Navbar from '../components/global/layout/Navbar/Navbar';
import { Switch } from 'react-router-dom';
import Login from '../components/auth/login/Login';
import Register from '../components/auth/register/Register';
import Home from '../components/settings/Settings';
import Alert from '../components/global/exception/Alert';
import ForgotPassword from '../components/auth/forgot-password/ForgotPassword';
import PrivateRouter from './utils/PrivateRoute';
import DefaultRoute from './utils/DefaultRoute';
import Connection from '../components/connection/Connection';
interface Props {}

const Routes: React.FC<Props> = () => {
    return (
        <div>
            <Alert></Alert>
            <Switch>
                <PrivateRouter exact path="/" comp={Home} navbar={Navbar} />
                <DefaultRoute exact path="/login" comp={Login} navbar={Navbar} />
                <DefaultRoute exact path="/register" comp={Register} navbar={Navbar} />
                <DefaultRoute exact path="/logout" navbar={Navbar} />
                <DefaultRoute exact path="/forgot-password" comp={ForgotPassword} navbar={Navbar} />
                <PrivateRouter exact path="/network" comp={Connection} navbar={Navbar} />
            </Switch>
        </div>
    );
};

export { Routes };
