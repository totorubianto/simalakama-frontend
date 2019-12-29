import React from "react";
import Navbar from "../components/global/layout/navbar/Navbar";
import Wraper from "../components/global/layout/wrapper/Wraper";
import { Switch, Route } from "react-router-dom";
import Login from "../components/auth/login/Login";
import Register from "../components/auth/register/Register";
import { Home } from "../components/home/Home";
import Alert from "../components/global/exception/Alert";
import ForgotPassword from "../components/auth/forgot-password/ForgotPassword";
import PrivateRouter from "./utils/PrivateRoute";
interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <div>
      <Alert></Alert>
      <Switch>
        <PrivateRouter exact path="/" component={Navbar}>
          <Wraper Navbar={Navbar} Child={Home} />
        </PrivateRouter>
        <Route exact path="/login">
          <Wraper Navbar={Navbar} Child={Login} />
        </Route>
        <Route exact path="/register">
          <Wraper Navbar={Navbar} Child={Register} />
        </Route>
        <Route exact path="/logout">
          <Wraper Navbar={Navbar} Child="logot" />
        </Route>
        <Route exact path="/forgot-password">
          <Wraper Navbar={Navbar} Child={ForgotPassword} />
        </Route>
      </Switch>
    </div>
  );
};

export { Routes };
