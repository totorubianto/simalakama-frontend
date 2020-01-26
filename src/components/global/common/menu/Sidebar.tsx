import React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
interface Props {
    onClick: Function;
    selectedKey: string;
    menu: any[];
}

const Sidebar: React.FC<Props> = ({ onClick, selectedKey, menu }) => {
    return (
        <div>
            <Nav
                onLinkClick={(ev: any, item: any) => onClick(ev, item)}
                selectedKey={selectedKey}
                selectedAriaLabel="Selected"
                ariaLabel="Nav simalakama"
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
                groups={menu}
            />
        </div>
    );
};

export { Sidebar };
