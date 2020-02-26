import React, { useState } from 'react';
import { Text } from 'office-ui-fabric-react';
import { connect } from 'react-redux';
import ForgotPasswordStyle from './styles/forgotPasswordStyle';
import { requestForgotPassword } from '../../../stores/auth/action';
import { useQuery } from '../../global/utils/useQuery';
import { forgotPassword } from '../../../stores/auth/action';
import { Redirect } from '../../global/utils/Redirect';
import { useHistory } from 'react-router-dom';
import { TextFieldGroup, Button } from '../../global/common/index';

interface Props {
    error: any;
    requestForgotPassword: any;
    forgotPassword: any;
    verification: any;
}

const ForgotPassword: React.FC<Props> = ({
    error,
    requestForgotPassword,
    forgotPassword,
    verification,
}) => {
    let history = useHistory();
    let query = useQuery();
    let token = query.get('token');
    const [formForgotPassword, setFormForgotPassword] = useState({ email: '' });
    const [formNewPassword, setFormNewPassword] = useState({
        newPassword: '',
        newPasswordConfirmation: '',
    });
    const { email } = formForgotPassword;
    const { newPassword, newPasswordConfirmation } = formNewPassword;
    const onChangeTextField = (e: any) => {
        setFormForgotPassword({
            ...formForgotPassword,
            [e.target.name]: e.target.value,
        });
    };
    const onChangeNewTextField = (e: any) => {
        setFormNewPassword({ ...formNewPassword, [e.target.name]: e.target.value });
    };
    const onSubmitForgotPassword = () => {
        requestForgotPassword({ email });
    };
    const onSubmitNewForgotPassword = () => {
        forgotPassword(token, formNewPassword);
    };
    const { verification: verify } = verification;
    if (verify?.user?.email) Redirect(history, '/');
    return (
        <ForgotPasswordStyle>
            {token ? (
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="card">
                                <Text className="card-field" variant="xxLarge">
                                    Forgot Password
                                </Text>

                                <TextFieldGroup
                                    label="New Password"
                                    type="password"
                                    placeholder="Input new password confirmation"
                                    name="newPassword"
                                    onChange={onChangeNewTextField}
                                    error={error}
                                    value={newPassword}
                                />
                                <TextFieldGroup
                                    label="New Password Confirmation"
                                    type="password"
                                    placeholder="Input new password"
                                    name="newPasswordConfirmation"
                                    onChange={onChangeNewTextField}
                                    error={error}
                                    value={newPasswordConfirmation}
                                />

                                <Button
                                    onClick={onSubmitNewForgotPassword}
                                    value="Forgot Password"
                                    type="button"
                                ></Button>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="card">
                                <Text className="card-field" variant="xxLarge">
                                    Forgot Password
                                </Text>
                                <TextFieldGroup
                                    label="Email"
                                    type="text"
                                    placeholder="Masukan Email"
                                    name="email"
                                    onChange={onChangeTextField}
                                    error={error}
                                    value={email}
                                />
                                <Button
                                    onClick={onSubmitForgotPassword}
                                    value="Forgot Password"
                                    type="button"
                                ></Button>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            )}
        </ForgotPasswordStyle>
    );
};

const mapStateToProps = (state: any) => ({
    isAuthenticated: state.auth.isAuthenticated,
    verification: state.verification,
    error: state.error,
});
export default connect(mapStateToProps, {
    requestForgotPassword,
    forgotPassword,
})(ForgotPassword);
