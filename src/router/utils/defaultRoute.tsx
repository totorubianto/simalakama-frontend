import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const DefaultRoute = ({
    comp: Component,
    auth: { isAuthenticated, loading },
    navbar: Navbar,
    ...rest
}: any) => {
    return (
        <>
            {Navbar ? <Navbar /> : null}
            <Route {...rest} render={props => <Component {...props} />} />
        </>
    );
};

DefaultRoute.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(DefaultRoute);
