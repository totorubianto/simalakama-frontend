import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppState } from '../../../stores/indexReducer';
import { Link } from 'react-router-dom';
import { MessageBar } from 'office-ui-fabric-react';
const Alert = ({ alerts }: any) =>
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert: any) => (
        <MessageBar
            key={alert.id}
            messageBarType={alert.alertType}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
        >
            {alert.msg}

            <Link to="www.bing.com" target="_blank">
                Visit our ask website.
            </Link>
        </MessageBar>
    ));

Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state: AppState) => ({
    alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
