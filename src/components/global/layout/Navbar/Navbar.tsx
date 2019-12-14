import React from 'react';
import NavbarStyle from './styles/Index';
import {
  Text,
  PrimaryButton,
  TextField,
  IPersonaSharedProps,
  Persona,
  PersonaSize,
  PersonaPresence,
  ContextualMenu,
  ContextualMenuItemType,
  IContextualMenuItem
} from 'office-ui-fabric-react';

import { useConstCallback } from '@uifabric/react-hooks';

interface Props {
  toto?: any;
}
interface State {}

const menuItems: IContextualMenuItem[] = [
  {
    key: 'newItem',
    text: 'New',
    iconProps: {
      iconName: 'Add'
    },
    onClick: () => console.log('New clicked')
  },
  {
    key: 'divider_1',
    itemType: ContextualMenuItemType.Divider
  },
  {
    key: 'setting',
    text: 'Setting',
    iconProps: {
      iconName: 'Settings'
    },
    onClick: () => console.log('Edit clicked')
  },
  {
    key: 'logout',
    text: 'Logout',
    iconProps: {
      iconName: 'SignOut'
    },
    onClick: e => console.log(e)
  }
];

const examplePersona: IPersonaSharedProps = {
  imageUrl:
    'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png',
  imageInitials: 'AL',
  text: 'Annie Lindqvist',
  secondaryText: 'Software Engineer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm'
};

export const Navbar: React.FunctionComponent = () => {
  const linkRef = React.useRef(null);
  const [showContextualMenu, setShowContextualMenu] = React.useState(false);
  const onShowContextualMenu = useConstCallback(() =>
    setShowContextualMenu(true)
  );
  const onHideContextualMenu = useConstCallback(() =>
    setShowContextualMenu(false)
  );

  return (
    <NavbarStyle>
      <div className='nav container'>
        <div className='nav-link'>
          <div className='nav-brand'>SIMALAKAMA</div>
        </div>

        <div className='nav-wrapper'>
          <div className='nav-wrapper-start'>
            <div className='nav-link'>
              <TextField
                className='nav-search'
                placeholder='Search ...'
                iconProps={{ iconName: 'Search' }}
              />
            </div>
          </div>
          <div className='nav-wrapper-end'>
            <a className='nav-link'>
              <Text key='1' variant='medium' nowrap block>
                Beranda
              </Text>
            </a>
            <a className='nav-link'>
              <Text key='1' variant='medium' nowrap block>
                Beranda
              </Text>
            </a>
            <a className='nav-link'>
              <PrimaryButton
                text='Primary'
                allowDisabledFocus
                disabled={false}
                checked={false}
              />
            </a>
            <a
              className='nav-link'
              ref={linkRef}
              onClick={onShowContextualMenu}
            >
              <Persona
                {...examplePersona}
                size={PersonaSize.size40}
                presence={PersonaPresence.away}
                hidePersonaDetails={false}
              />
            </a>
          </div>
        </div>
      </div>

      <ContextualMenu
        items={menuItems}
        hidden={!showContextualMenu}
        target={linkRef}
        onItemClick={onHideContextualMenu}
        onDismiss={onHideContextualMenu}
      />
    </NavbarStyle>
  );
};
