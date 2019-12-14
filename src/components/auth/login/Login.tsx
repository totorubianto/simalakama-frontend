import React from 'react';
import LoginStyle from './styles/Index';
import {
  Text,
  TextField,
  PrimaryButton,
  Checkbox
} from 'office-ui-fabric-react';
import { getTheme, FontWeights } from 'office-ui-fabric-react/lib/Styling';
import { Link } from 'react-router-dom';
interface Props {}

const Login: React.FC<Props> = () => {
  //   const onRenderDescription = (toto: string) => {
  //     const theme = getTheme();
  //     return (
  //       <Text
  //         variant='small'
  //         styles={{
  //           root: { color: theme.palette.green, fontWeight: FontWeights.bold }
  //         }}
  //       >
  //         {toto}
  //       </Text>
  //     );
  //   };
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
              //   onRenderDescription={() => onRenderDescription('toto')}
            />
            <TextField
              className='card-field'
              label='Password'
              type='password'
              name='password'
              //   onRenderDescription={() => onRenderDescription('rubianto')}
            />
            <Checkbox
              className='card-field'
              label='Setuju dengan semua ketentuan'
              //   onChange={_onChange}
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
