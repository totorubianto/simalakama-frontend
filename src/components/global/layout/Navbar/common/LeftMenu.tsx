import React from 'react';
import { TextField } from 'office-ui-fabric-react';
interface Props {}

const LeftMenu: React.FC<Props> = () => {
    return (
        <div>
            <div className="nav-wrapper-start">
                <div className="nav-link">
                    <TextField
                        className="nav-search"
                        placeholder="Search ..."
                        iconProps={{ iconName: 'Search' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LeftMenu;
