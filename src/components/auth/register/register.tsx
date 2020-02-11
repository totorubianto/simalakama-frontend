import React, { useState } from 'react';
import { Text } from 'office-ui-fabric-react';
import { Link, Redirect } from 'react-router-dom';
import RegisterStyle from './styles/registerStyle';
import { connect } from 'react-redux';
import { register } from '../../../stores/auth/action';
import { inputType } from '../../global/utils/inputType';
import { TextFieldGroup, Button } from '../../global/common';
interface Props {
    register: any;
    error: any;
    auth: any;
}

const Register: React.FC<Props> = ({ register, error, auth: { isAuthenticated, loading } }) => {
    const [fieldRegister, setFieldRegister] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        agree: true,
    });
    const { firstName, lastName, email, password, passwordConfirmation, agree } = fieldRegister;
    const onChangeTextField = (e: any) => {
        inputType(e, fieldRegister, setFieldRegister, { checkbox: { antonym: true } });
    };
    const onRegister = () => {
        register({ firstName, lastName, email, password, passwordConfirmation });
    };
    if (isAuthenticated) {
        return <Redirect to="/"></Redirect>;
    }
    return (
        <RegisterStyle className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card">
                        <form onSubmit={() => onRegister()}>
                            <Text className="card-field" variant="xxLarge">
                                Register
                            </Text>
                            <TextFieldGroup
                                label="Email"
                                name="email"
                                placeholder="Input your email"
                                type="email"
                                value={email}
                                error={error}
                                onChange={onChangeTextField}
                            />
                            <TextFieldGroup
                                label="Password"
                                name="password"
                                placeholder="Input your password"
                                type="password"
                                value={password}
                                error={error}
                                onChange={onChangeTextField}
                            />
                            <TextFieldGroup
                                label="Password Confirmation"
                                name="passwordConfirmation"
                                placeholder="Input your password Confirmation"
                                type="password"
                                value={passwordConfirmation}
                                error={error}
                                onChange={onChangeTextField}
                            />
                            <TextFieldGroup
                                label="First Name"
                                name="firstName"
                                placeholder="Input your firstName"
                                type="text"
                                value={firstName}
                                error={error}
                                onChange={onChangeTextField}
                            />
                            <TextFieldGroup
                                label="Last Name"
                                name="lastName"
                                placeholder="Input your lastname"
                                type="text"
                                value={lastName}
                                error={error}
                                onChange={onChangeTextField}
                            />
                            <TextFieldGroup
                                label="Setuju dengan semua ketentuan"
                                name="agree"
                                type="checkbox"
                                onChange={onChangeTextField}
                            />

                            <div className="card-label">
                                <Text className="card-field" variant="medium">
                                    Belum punya akun?
                                </Text>
                                <Text className="card-field" variant="medium">
                                    <Link to="#/" className="card-field">
                                        Daftar!
                                    </Link>
                                </Text>
                            </div>
                            <Button
                                type="button"
                                value="Register"
                                onClick={onRegister}
                                disabled={agree}
                            ></Button>
                        </form>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </RegisterStyle>
    );
};
const mapStateToProps = (state: any) => ({
    auth: state.auth,
    error: state.error,
});
export default connect(mapStateToProps, { register })(Register);
