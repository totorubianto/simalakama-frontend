import React, { useState, useEffect } from 'react';
import Card from '../global/style/card';
import { INavLink } from 'office-ui-fabric-react/lib/Nav';
import SettingStyle from './styles/settingStyle';
import { connect } from 'react-redux';
import SecurityTab from './common/securityTab';
import { withRouter } from 'react-router-dom';
import AccountTab from './common/accountTab';
import { Sidebar } from '../global/common';
import { reload } from '../../stores/global/action';

interface Props {
    history: any;
    auth: any;
    reload: Function;
}

const Settings: React.FC<Props> = ({ auth, history, reload }) => {
    useEffect(() => {
        console.log('rubah');
        reload();
    }, [auth]);
    const [menuSidebar, setMenuSidebar] = useState('account');
    const [tabQuery, setTabQuery] = useState('account');
    const _onLinkClick = (ev: React.MouseEvent<HTMLElement>, item?: INavLink) => {
        const queryPage = item?.page;
        history.push(`?page=${queryPage}`);
        setTabQuery(queryPage);
        if (item?.key) setMenuSidebar(item.key);
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

const mapStateToProps = (state: any) => ({
    auth: state.auth,
});
export default withRouter(connect(mapStateToProps, { reload })(Settings));
