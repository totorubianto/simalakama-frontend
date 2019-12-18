import React from 'react';
import LoginStyle from './styles/LoginStyle';
import {
  Text,
  TextField,
  PrimaryButton,
  Checkbox
} from 'office-ui-fabric-react';

import { Link } from 'react-router-dom';
interface Props {}

const Login: React.FC<Props> = () => {
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
              name='email'
            />
            <TextField
              className='card-field'
              label='Password'
              type='password'
              name='password'
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
            />
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </LoginStyle>
  );
};

export default Login;
