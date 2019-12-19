import React, { useState } from 'react';
import LoginStyle from './styles/LoginStyle';
import {
  Text,
  TextField,
  PrimaryButton,
  Checkbox,
  ITextFieldProps,
  getTheme, FontWeights
} from 'office-ui-fabric-react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { login } from '../../../stores/auth/action'
import error from '../../global/common/error'
interface Props {
  login: any,
  onRenderDescription: any
}

const Login: React.FC<Props> = ({ login, }) => {
  const [fieldLogin, setFieldLogin] = useState({
    email: "",
    password: ""
  })
  const { email, password } = fieldLogin;
  const onChangeTextField = (e: any) => {
    setFieldLogin({ ...fieldLogin, [e.target.name]: e.target.value })
  }
  const onLogin = () => {
    login({ email, password })
  }
  const _onRenderDescription = (): JSX.Element => {
    const theme = getTheme();
    return (
      <Text variant="medium" styles={{ root: { color: theme.palette.red, fontWeight: FontWeights.bold } }}>
        {/* toto rubianto */}
      </Text>
    );
  };

  return (
    <LoginStyle>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div className='card'>
            <form onSubmit={() => onLogin()}>
              <Text className='card-field' variant='xxLarge'>
                Login
              </Text>

              <TextField
                className='card-field'
                label='Email'
                type="email"
                name='email'
                onChange={e => onChangeTextField(e)}
                onRenderDescription={()=>error({error:"data"})}
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
            </form>
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
