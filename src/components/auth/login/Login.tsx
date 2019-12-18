import React, { useState } from 'react';
import LoginStyle from './styles/LoginStyle';
import {
  Text,
  TextField,
  PrimaryButton,
  Checkbox
} from 'office-ui-fabric-react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { login } from '../../../stores/auth/action'
interface Props {
  login: any
}

const Login: React.FC<Props> = ({ login }) => {
  const [fieldLogin, setFieldLogin] = useState({
    email: "",
    password: ""
  })
  const { email, password } = fieldLogin;
  console.log(email)
  const onChangeTextField = (e: any) => {
    setFieldLogin({ ...fieldLogin, [e.target.name]: e.target.value })
  }
  const onLogin = () => {
    console.log({email, password})
    login({ email, password })
  }

  return (
    <LoginStyle>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div className='card'>
            <Text className='card-field' variant='xxLarge'>
              Login
            </Text>
            <TextField
              className='card-field'
              label='Email'
              type="email"
              name='email'
              onChange={e => onChangeTextField(e)}
              value={email}
            />
            <TextField
              className='card-field'
              label='Password'
              type='password'
              name='password'
              onChange={(e: any) => onChangeTextField(e)}
              value={password}
            />
            <Checkbox
              className='card-field'
              label='Setuju dengan semua ketentuan'
            />
            <div className='card-forgotPassword'>
              <Text className='card-field' variant='medium'>
                Lupa Password?
              </Text>
              <Text className='card-field' variant='medium'>
                <Link to='#/' className='card-field'>
                  Reset Password!
                </Link>
              </Text>
            </div>

            <PrimaryButton
              className='w-100'
              text='Primary '
              allowDisabledFocus
              disabled={false}
              onClick={() => onLogin()}
            />
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </LoginStyle>
  );
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated
  // error: state.error
});
export default connect(mapStateToProps, { login })(Login);
