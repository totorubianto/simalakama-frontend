import React from 'react';
import { Link } from 'react-router-dom';
import { useConstCallback } from '@uifabric/react-hooks';
import {
  Text,
  PrimaryButton,
  IPersonaSharedProps,
  Persona,
  PersonaSize,
  PersonaPresence,
  ContextualMenu
} from 'office-ui-fabric-react';
import MenuItems from './Menu';


export const RightMenu = ({ history, isAuthenticated, user, logout }: any) => {
  const linkRef = React.useRef(null);
  const [showContextualMenu, setShowContextualMenu] = React.useState(false);
  const onShowContextualMenu = useConstCallback(() =>
    setShowContextualMenu(true)
  );
  const onHideContextualMenu = useConstCallback(() =>
    setShowContextualMenu(false)
  );
  console.log(user)

  const avatar: IPersonaSharedProps = {
    imageUrl:
      'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png',
    imageInitials: 'AL',
    text: user.name,
    secondaryText: 'Software Engineer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm'
  };
  return (
    <div className='nav-wrapper-end'>
      <ContextualMenu
        items={MenuItems(history, logout)}
        hidden={!showContextualMenu}
        target={linkRef}
        onItemClick={onHideContextualMenu}
        onDismiss={onHideContextualMenu}
      />
      {isAuthenticated ? (
        <>
          <Link to='#/' className='nav-link'>
            <Text key='1' variant='medium' nowrap block>
              Beranda
            </Text>
          </Link>
          <Link to='#/' className='nav-link'>
            <Text key='1' variant='medium' nowrap block>
              Pekerjaan
            </Text>
          </Link>
          <Link to='#/' className='nav-link'>
            <PrimaryButton
              text='Primary'
              allowDisabledFocus
              disabled={false}
              checked={false}
            />
          </Link>
          <Link
            to='#/'
            className='nav-link'
            ref={linkRef}
            onClick={onShowContextualMenu}
          >
            <Persona
              {...avatar}
              size={PersonaSize.size40}
              presence={PersonaPresence.away}
              hidePersonaDetails={false}
            />
          </Link>
        </>
      ) : (
          <>
            <Link to='/login' className='nav-link'>
              <PrimaryButton>Login</PrimaryButton>
            </Link>
            <Link to='/register' className='nav-link'>
              <PrimaryButton>Register</PrimaryButton>
            </Link>
          </>
        )}
    </div>
  );
};
