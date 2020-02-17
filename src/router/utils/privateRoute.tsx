import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import setAuthToken from '../../utils/setAuthToken';
import { loadUser } from '../../stores/auth/action';
if (localStorage.token) {
    setAuthToken(localStorage.token);
}
const PrivateRoute = ({
    comp: Component,
    auth: { isAuthenticated, loading },
    navbar: Navbar,
    loadUser,
    ...rest
}: any) => {
    useEffect(() => {
        loadUser();
    }, [loadUser]);

    return loading ? (
        <div>loading</div>
    ) : isAuthenticated ? (
        <>
            {Navbar ? <Navbar /> : null}
            <Route {...rest} render={props => <Component {...props} />} />
        </>
    ) : (
        <Redirect to={{ pathname: '/login' }} />
    );
};

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { loadUser })(PrivateRoute);
