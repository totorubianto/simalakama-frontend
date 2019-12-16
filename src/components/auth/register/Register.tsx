import React from 'react';
import {
  Text,
  TextField,
  PrimaryButton,
  Checkbox
} from 'office-ui-fabric-react';
import { Link } from 'react-router-dom';
import RegisterStyle from './styles/Register';
interface Props {}

const Register: React.FC<Props> = () => {
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
              //   onRenderDescription={() => onRenderDescription('toto')}
            />
            <TextField
              className='card-field'
              label='Password'
              type='password'
              name='password'
              //   onRenderDescription={() => onRenderDescription('rubianto')}
            />
            <TextField
              className='card-field'
              label='Name'
              type='text'
              name='name'
              //   onRenderDescription={() => onRenderDescription('rubianto')}
            />
            <Checkbox
              className='card-field'
              label='Setuju dengan semua ketentuan'
              //   onChange={_onChange}
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
            />
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </RegisterStyle>
  );
};

export default Register;
