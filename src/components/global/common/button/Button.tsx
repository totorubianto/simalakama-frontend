import React from 'react';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react';

interface Props {
    value: string;
    onClick?: Function;
    type: string;
    disabled?: boolean;
    theme?: string;
    iconProps?: string;
    style?: any;
    onRenderChildren?: any;
}

const Button: React.FC<Props> = ({
    onClick,
    value,
    type,
    disabled,
    theme,
    style,
    onRenderChildren,
    iconProps,
}) => {
    return theme === 'plain' ? (
        <DefaultButton
            disabled={disabled}
            style={style}
            type={type}
            iconProps={{ iconName: iconProps }}
            onRenderChildren={() => onRenderChildren}
            onClick={onClick ? () => onClick() : () => null}
        >
            {value}
        </DefaultButton>
    ) : (
        <PrimaryButton
            disabled={disabled}
            type={type}
            style={style}
            iconProps={{ iconName: iconProps }}
            onRenderChildren={() => onRenderChildren}
            onClick={onClick ? () => onClick() : () => null}
        >
            {value}
        </PrimaryButton>
    );
};

export { Button };
