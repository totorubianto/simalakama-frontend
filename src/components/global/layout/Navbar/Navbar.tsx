import React from 'react';
import NavbarStyle from './styles/NavbarStyle';
import LeftMenu from './common/LeftMenu';
import { Link, useHistory } from 'react-router-dom';
import { RightMenu } from './common/RightMenu';

export const Navbar: React.FunctionComponent = () => {
  let history = useHistory();

  return (
    <NavbarStyle>
      <div className='nav container'>
        <Link to='/' className='nav-link'>
          <div className='nav-brand'>SIMALAKAMA</div>
        </Link>

        <div className='nav-wrapper'>
          <LeftMenu></LeftMenu>
          <RightMenu history={history}></RightMenu>
        </div>
      </div>
    </NavbarStyle>
  );
};
