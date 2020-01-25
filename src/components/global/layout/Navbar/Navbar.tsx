import React from 'react';
import NavbarStyle from './styles/NavbarStyle';
import LeftMenu from './common/LeftMenu';
import { Link, useHistory } from 'react-router-dom';
import { RightMenu } from './common/RightMenu';
import { connect } from 'react-redux';
import { AppState } from '../../../../stores/indexReducer';
import { logout } from '../../../../stores/auth/action';

interface Props {
    auth: any;
    isAuthenticated: boolean;
    logout: any;
}

const Navbar: React.FC<Props> = ({ auth, isAuthenticated, logout }) => {
    let history = useHistory();

    return (
        <NavbarStyle>
            <div className="nav container">
                <Link to="/" className="nav-link">
                    <div className="nav-brand">SIMALAKAMA</div>
                </Link>

                <div className="nav-wrapper">
                    <LeftMenu></LeftMenu>
                    <RightMenu
                        history={history}
                        isAuthenticated={isAuthenticated}
                        user={auth.user}
                        logout={logout}
                    ></RightMenu>
                </div>
            </div>
        </NavbarStyle>
    );
};

const mapStateToProps = (state: AppState) => ({
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
