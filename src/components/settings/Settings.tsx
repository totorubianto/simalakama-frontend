import React, { useState } from 'react';
import Card from '../global/style/Card';
import { Nav, INavLink } from 'office-ui-fabric-react/lib/Nav';
import SettingStyle from './styles/SettingStyle';
import { connect } from 'react-redux';
import SecurityTab from './common/SecurityTab';
import { withRouter } from 'react-router-dom';
import AccountTab from './common/AccountTab';
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
        console.log(queryPage);
        if (item && item.key) {
            setMenuSidebar(item.key);
        }
    };
    return (
        <SettingStyle className="container">
            <Card height="100" margin="20,0,0,0">
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <Nav
                            onLinkClick={(ev: any, item: any) => _onLinkClick(ev, item)}
                            selectedKey={menuSidebar}
                            selectedAriaLabel="Selected"
                            ariaLabel="Nav basic example"
                            styles={{
                                root: {
                                    width: '100%',
                                    height: 600,
                                    boxSizing: 'border-box',
                                    border: '1px solid #eee',
                                    overflowY: 'auto',
                                    backgroundColor: 'white',
                                },
                            }}
                            groups={[
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
                            ]}
                        />
                    </div>
                    <div className="col-md-9">
                        {tabQuery === 'account' ? <AccountTab /> : <SecurityTab />}
                    </div>
                </div>
            </Card>
        </SettingStyle>
    );
};

const mapStateToProps = (state: any) => ({});
export default withRouter(connect(mapStateToProps)(Settings));
