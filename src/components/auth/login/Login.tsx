import React, { useState } from 'react';
import LoginStyle from './styles/LoginStyle';
import { Text, TextField, PrimaryButton, Checkbox } from 'office-ui-fabric-react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../../stores/auth/action';
import { errorData, checkErrors } from '../../global/common/error';
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
        switch (e.target.type) {
            case 'text':
                setFieldLogin({ ...fieldLogin, [e.target.name]: e.target.value });
                break;
            case 'password':
                setFieldLogin({ ...fieldLogin, [e.target.name]: e.target.value });
                break;
            case 'email':
                setFieldLogin({ ...fieldLogin, [e.target.name]: e.target.value });
                break;
            case 'checkbox':
                setFieldLogin({ ...fieldLogin, [e.target.name]: e.target.checked });
                break;
            default:
                setFieldLogin({ ...fieldLogin, [e.target.name]: '' });
                break;
        }
    };
    const onLogin = () => {
        login({ email, password, keepLogin });
    };
    if (isAuthenticated) {
        return <Redirect to="/" />;
    }
    return (
        <LoginStyle>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card">
                        <form onSubmit={() => onLogin()}>
                            <Text className="card-field" variant="xxLarge">
                                Login
                            </Text>

                            <TextField
                                className="card-field"
                                label="Email"
                                type="email"
                                name="email"
                                onChange={e => onChangeTextField(e)}
                                onRenderDescription={() =>
                                    errorData({ error: checkErrors('email', error) })
                                }
                                value={email}
                            />
                            <TextField
                                className="card-field"
                                label="Password"
                                type="password"
                                name="password"
                                onRenderDescription={() =>
                                    errorData({ error: checkErrors('password', error) })
                                }
                                onChange={(e: any) => onChangeTextField(e)}
                                value={password}
                            />
                            <Checkbox
                                className="card-field"
                                name="keepLogin"
                                onChange={(e: any) => onChangeTextField(e)}
                                label="Setuju dengan semua ketentuan"
                            />
                            <div className="card-forgotPassword">
                                <Text className="card-field" variant="medium">
                                    Lupa Password?
                                </Text>
                                <Text className="card-field" variant="medium">
                                    <Link to="/forgot-password" className="card-field">
                                        Reset Password!
                                    </Link>
                                </Text>
                            </div>

                            <PrimaryButton
                                className="w-100"
                                text="Login "
                                allowDisabledFocus
                                disabled={false}
                                onClick={() => onLogin()}
                            />
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
