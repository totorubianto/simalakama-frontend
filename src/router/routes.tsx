import React from 'react';
import Navbar from '../components/global/layout/navbar/navbar';
import { Switch } from 'react-router-dom';
import Login from '../components/auth/login/login';
import Register from '../components/auth/register/register';
import Setting from '../components/settings/settings';
import Alert from '../components/global/exception/Alert';
import ForgotPassword from '../components/auth/forgot-password/forgotPassword';
import PrivateRouter from './utils/privateRoute';
import DefaultRoute from './utils/defaultRoute';
import Connection from '../components/connection/connection';
import Profile from '../components/profile/profile';
import Home from '../components/home/home';

interface Props {}

const Routes: React.FC<Props> = () => {
    return (
        <div>
            <Alert></Alert>
            <Switch>
                <PrivateRouter exact path="/setting" comp={Setting} navbar={Navbar} />
                <PrivateRouter exact path="/" comp={Home} navbar={Navbar} />
                <DefaultRoute exact path="/login" comp={Login} navbar={Navbar} />
                <DefaultRoute exact path="/register" comp={Register} navbar={Navbar} />
                <DefaultRoute exact path="/logout" navbar={Navbar} />
                <DefaultRoute exact path="/forgot-password" comp={ForgotPassword} navbar={Navbar} />
                <PrivateRouter exact path="/network" comp={Connection} navbar={Navbar} />
                <PrivateRouter exact path="/user/:username" comp={Profile} navbar={Navbar} />
            </Switch>
        </div>
    );
};

export { Routes };
