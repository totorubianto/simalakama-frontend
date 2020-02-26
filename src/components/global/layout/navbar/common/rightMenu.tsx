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
    ContextualMenu,
} from 'office-ui-fabric-react';
import MenuItems from './menu';

export const RightMenu = ({ history, isAuthenticated, user, logout }: any) => {
    const linkRef = React.useRef(null);
    const [showContextualMenu, setShowContextualMenu] = React.useState(false);
    const onShowContextualMenu = useConstCallback(() => setShowContextualMenu(true));
    const onHideContextualMenu = useConstCallback(() => setShowContextualMenu(false));

    const avatar: IPersonaSharedProps = {
        imageUrl: user?.avatar?.url,
        imageInitials: user?.firstName?.[0] + user?.firstName?.[1],
        text: user?.firstName,
        secondaryText: 'Software Engineer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
    };
    return (
        <div className="nav-wrapper-end">
            <ContextualMenu
                items={MenuItems(history, logout)}
                hidden={!showContextualMenu}
                target={linkRef}
                onItemClick={onHideContextualMenu}
                onDismiss={onHideContextualMenu}
            />
            {isAuthenticated ? (
                <>
                    <Link to="/" className="nav-link">
                        <Text key="1" variant="medium" nowrap block>
                            Beranda
                        </Text>
                    </Link>
                    <Link to="network" className="nav-link">
                        <Text key="1" variant="medium" nowrap block>
                            Network
                        </Text>
                    </Link>
                    <Link to="#/" className="nav-link">
                        <PrimaryButton
                            text="Primary"
                            allowDisabledFocus
                            disabled={false}
                            checked={false}
                        />
                    </Link>
                    <Link to="#/" className="nav-link" ref={linkRef} onClick={onShowContextualMenu}>
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
                    <Link to="/login" className="nav-link">
                        <PrimaryButton>Login</PrimaryButton>
                    </Link>
                    <Link to="/register" className="nav-link">
                        <PrimaryButton>Register</PrimaryButton>
                    </Link>
                </>
            )}
        </div>
    );
};
