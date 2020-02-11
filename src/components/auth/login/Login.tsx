import React, { useState } from 'react';
import LoginStyle from './styles/loginStyle';
import { Text } from 'office-ui-fabric-react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../../stores/auth/action';
import { TextFieldGroup, Button } from '../../global/common';
import { inputType } from '../../global/utils/inputType';
interface Props {
    login: any;
    auth: any;
    onRenderDescription: any;
    error: any;
}

const Login: React.FC<Props> = ({ login, error, auth: { isAuthenticated, loading } }) => {
    const [fieldLogin, setFieldLogin] = useState({
        email: '',
        password: '',
        keepLogin: false,
    });
    const { email, password, keepLogin } = fieldLogin;
    const onChangeTextField = (e: any) => {
        inputType(e, fieldLogin, setFieldLogin);
    };
    const onLogin = () => {
        login({ email, password, keepLogin });
    };
    if (isAuthenticated) {
        return <Redirect to="/" />;
    }
    return (
        <LoginStyle className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card">
                        <form onSubmit={() => onLogin()}>
                            <Text className="card-field" variant="xxLarge">
                                Login
                            </Text>
                            <TextFieldGroup
                                label="Email"
                                type="email"
                                placeholder="Input your email"
                                name="email"
                                onChange={onChangeTextField}
                                error={error}
                                value={email}
                            />
                            <TextFieldGroup
                                label="Password"
                                type="password"
                                placeholder="Input your password"
                                name="password"
                                onChange={onChangeTextField}
                                error={error}
                                value={password}
                            />
                            <TextFieldGroup
                                label="Remember me"
                                type="checkbox"
                                name="keepLogin"
                                onChange={onChangeTextField}
                            />

                            <div className="card-forgotPassword">
                                <Text className="card-field" variant="medium">
                                    Forgot Password?
                                </Text>
                                <Text className="card-field" variant="medium">
                                    <Link to="/forgot-password" className="card-field">
                                        Reset Password!
                                    </Link>
                                </Text>
                            </div>
                            <Button value="Login" onClick={onLogin} type="button" />
                        </form>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </LoginStyle>
    );
};

const mapStateToProps = (state: any) => ({
    auth: state.auth,
    error: state.error,
});
export default connect(mapStateToProps, { login })(Login);
