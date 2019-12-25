import React from 'react';
import Navbar from '../components/global/layout/navbar/Navbar';
import Wraper from '../components/global/layout/wrapper/Wraper';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/auth/login/Login';
import Register from '../components/auth/register/Register';
import { Home } from '../components/home/Home';
import Alert from '../components/global/exception/Alert';
interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <div>
      <Alert></Alert>
      <Switch>
        <Route exact path='/'>
          <Wraper Navbar={Navbar} Child={Home} />
        </Route>
        <Route exact path='/login'>
          <Wraper Navbar={Navbar} Child={Login} />
        </Route>
        <Route exact path='/register'>
          <Wraper Navbar={Navbar} Child={Register} />
        </Route>
        <Route exact path='/logout'>
          <Wraper Navbar={Navbar} Child='logot' />
        </Route>
      </Switch>
    </div>
  );
};

export { Routes };
