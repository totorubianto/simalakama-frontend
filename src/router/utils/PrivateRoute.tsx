import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}: any) => {
  console.log(loading, isAuthenticated);
  return isAuthenticated && !loading ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
