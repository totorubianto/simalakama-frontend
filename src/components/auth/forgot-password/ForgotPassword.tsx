import React, { useState } from 'react';
import { TextField, Text, PrimaryButton } from 'office-ui-fabric-react';
import { connect } from 'react-redux';
import ForgotPasswordStyle from './styles/ForgotPasswordStyle';
import { checkErrors, errorData } from '../../global/common/error';
import { requestForgotPassword } from '../../../stores/auth/action';
import { useQuery } from '../../global/common/useQuery';
import { forgotPassword } from '../../../stores/auth/action';

interface Props {
    error: any;
    requestForgotPassword: any;
    forgotPassword: any;
}

const ForgotPassword: React.FC<Props> = ({ error, requestForgotPassword, forgotPassword }) => {
    let query = useQuery();
    let token = query.get('token');
    const [formForgotPassword, setFormForgotPassword] = useState({
        email: '',
    });
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
    return (
        <ForgotPasswordStyle>
            {token ? (
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="card">
                            <Text className="card-field" variant="xxLarge">
                                Forgot Password
                            </Text>
                            <form onSubmit={() => onSubmitForgotPassword()}>
                                <TextField
                                    className="card-field"
                                    label="New Password"
                                    type="password"
                                    placeholder="Masukan new password"
                                    name="newPassword"
                                    onChange={e => onChangeNewTextField(e)}
                                    onRenderDescription={() =>
                                        errorData({ error: checkErrors('newPassword', error) })
                                    }
                                    value={newPassword}
                                />
                                <TextField
                                    className="card-field"
                                    label="New Password Confirmation"
                                    type="password"
                                    placeholder="Masukan new password confirmation"
                                    name="newPasswordConfirmation"
                                    onChange={e => onChangeNewTextField(e)}
                                    onRenderDescription={() =>
                                        errorData({
                                            error: checkErrors('newPasswordConfirmation', error),
                                        })
                                    }
                                    value={newPasswordConfirmation}
                                />
                                <PrimaryButton onClick={() => onSubmitNewForgotPassword()}>
                                    Forgot Password
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            ) : (
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="card">
                            <Text className="card-field" variant="xxLarge">
                                Forgot Password
                            </Text>
                            <form onSubmit={() => onSubmitForgotPassword()}>
                                <TextField
                                    className="card-field"
                                    label="Email"
                                    type="email"
                                    placeholder="Masukan email"
                                    name="email"
                                    onChange={e => onChangeTextField(e)}
                                    onRenderDescription={() =>
                                        errorData({ error: checkErrors('email', error) })
                                    }
                                    value={email}
                                />
                                <PrimaryButton onClick={() => onSubmitForgotPassword()}>
                                    Forgot Password
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            )}
        </ForgotPasswordStyle>
    );
};

const mapStateToProps = (state: any) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
});
export default connect(mapStateToProps, {
    requestForgotPassword,
    forgotPassword,
})(ForgotPassword);
