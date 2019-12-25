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
import { errorData, checkErrors } from '../../global/common/error';
interface Props {
  register: any;
  error: any;
}

const Register: React.FC<Props> = ({ register, error }) => {
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
            <form onSubmit={() => onRegister()}>
              <Text className='card-field' variant='xxLarge'>
                Register
              </Text>
              <TextField
                className='card-field'
                label='Email'
                name='email'
                value={email}
                onRenderDescription={() =>
                  errorData({ error: checkErrors('email', error) })
                }
                onChange={e => onChangeTextField(e)}
              />
              <TextField
                className='card-field'
                label='Password'
                type='password'
                name='password'
                value={password}
                onRenderDescription={() =>
                  errorData({ error: checkErrors('password', error) })
                }
                onChange={e => onChangeTextField(e)}
              />
              <TextField
                className='card-field'
                label='Name'
                type='text'
                name='name'
                onRenderDescription={() =>
                  errorData({ error: checkErrors('name', error) })
                }
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
                text='Register '
                allowDisabledFocus
                disabled={false}
                onClick={(e: any) => onRegister()}
              />
            </form>
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </RegisterStyle>
  );
};
const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});
export default connect(mapStateToProps, { register })(Register);
