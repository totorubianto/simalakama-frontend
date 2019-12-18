import React, { useState } from 'react';
import {
  Text,
  TextField,
  PrimaryButton,
  Checkbox
} from 'office-ui-fabric-react';
import { Link } from 'react-router-dom';
import RegisterStyle from './styles/RegisterStyle';
import { connect } from 'react-redux';
import { register } from '../../../stores/auth/action';
interface Props {
  register: any;
}

const Register: React.FC<Props> = ({ register }) => {
  const [fieldRegister, setFieldRegister] = useState({
    name: '',
    email: '',
    password: ''
  });
  const { name, email, password } = fieldRegister;
  const onChangeTextField = (e: any) => {
    setFieldRegister({ ...fieldRegister, [e.target.name]: e.target.value });
  };
  const onRegister = () => {
    register({ name, email, password });
  };
  return (
    <RegisterStyle>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div className='card'>
            <Text className='card-field' variant='xxLarge'>
              Register
            </Text>
            <TextField
              className='card-field'
              label='Email'
              name='email'
              value={email}
              onChange={e => onChangeTextField(e)}
            />
            <TextField
              className='card-field'
              label='Password'
              type='password'
              name='password'
              value={password}
              onChange={e => onChangeTextField(e)}
            />
            <TextField
              className='card-field'
              label='Name'
              type='text'
              name='name'
              onChange={e => onChangeTextField(e)}
              value={name}
            />
            <Checkbox
              className='card-field'
              label='Setuju dengan semua ketentuan'
            />
            <div className='card-label'>
              <Text className='card-field' variant='medium'>
                Belum punya akun?
              </Text>
              <Text className='card-field' variant='medium'>
                <Link to='#/' className='card-field'>
                  Daftar!
                </Link>
              </Text>
            </div>

            <PrimaryButton
              className='w-100'
              text='Primary '
              allowDisabledFocus
              disabled={false}
              onClick={(e: any) => onRegister()}
            />
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </RegisterStyle>
  );
};
const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated
  // error: state.error
});
export default connect(mapStateToProps, { register })(Register);
