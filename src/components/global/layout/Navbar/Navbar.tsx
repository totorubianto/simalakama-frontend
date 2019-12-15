import React from 'react';
import NavbarStyle from './styles/Navbar';
import LeftMenu from './common/LeftMenu';
import { Link, useHistory } from 'react-router-dom';
import { RightMenu } from './common/RightMenu';

export const Navbar: React.FunctionComponent = () => {
  let history = useHistory();

  return (
    <NavbarStyle>
      <div className='nav container'>
        <div className='nav-link'>
          <div className='nav-brand'>SIMALAKAMA</div>
        </div>

        <div className='nav-wrapper'>
          <LeftMenu></LeftMenu>
          <RightMenu history={history}></RightMenu>
        </div>
      </div>
    </NavbarStyle>
  );
};
