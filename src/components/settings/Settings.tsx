import React, { useState } from 'react';
import Card from '../global/style/Card';
import { INavLink } from 'office-ui-fabric-react/lib/Nav';
import SettingStyle from './styles/SettingStyle';
import { connect } from 'react-redux';
import SecurityTab from './common/SecurityTab';
import { withRouter } from 'react-router-dom';
import AccountTab from './common/AccountTab';
import { Sidebar } from '../global/common';
interface Props {
    history: any;
}

const Settings: React.FC<Props> = ({ history }) => {
    const [menuSidebar, setMenuSidebar] = useState('account');
    const [tabQuery, setTabQuery] = useState('account');
    const _onLinkClick = (ev: React.MouseEvent<HTMLElement>, item?: INavLink) => {
        const queryPage = item && item.page;
        history.push(`?page=${queryPage}`);
        setTabQuery(queryPage);
        if (item && item.key) setMenuSidebar(item.key);
    };

    return (
        <SettingStyle className="container">
            <Card height="100" margin={{ top: 20 }}>
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <Sidebar onClick={_onLinkClick} selectedKey={menuSidebar} menu={menu} />
                    </div>
                    <div className="col-md-9">
                        {tabQuery === 'account' ? <AccountTab /> : <SecurityTab />}
                    </div>
                </div>
            </Card>
        </SettingStyle>
    );
};

const menu = [
    {
        links: [
            {
                page: 'account',
                name: 'Account',
                url: '#',
                icon: 'UserFollowed',
                key: 'account',
                isExpanded: true,
            },
            {
                page: 'security',
                name: 'Security',
                url: '#',
                icon: 'LaptopSecure',
                key: 'security',
                isExpanded: true,
            },
        ],
    },
];

const mapStateToProps = (state: any) => ({});
export default withRouter(connect(mapStateToProps)(Settings));
