import {
  ContextualMenuItemType,
  IContextualMenuItem
} from 'office-ui-fabric-react';
import Redirect from '../../../utils/Redirect';

const MenuItems = (history: any) => {
  const toto: IContextualMenuItem[] = [
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
      onClick: (e: any) => Redirect(history, '/login')
    }
  ];
  return toto;
};

export default MenuItems;
