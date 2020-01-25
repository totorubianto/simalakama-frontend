import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';

interface Props {
    value: string;
    onClick: Function;
    type: string;
}

const Button: React.FC<Props> = ({ onClick, value, type }) => {
    return (
        <div>
            <PrimaryButton type={type} onClick={() => onClick()}>
                {value}
            </PrimaryButton>
        </div>
    );
};

export { Button };
