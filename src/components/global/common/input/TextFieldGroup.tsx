// for input (text, email, password, date)

import React from 'react';
import { TextField, Checkbox } from 'office-ui-fabric-react';
import { errorData, checkErrors } from '../error';

interface Props {
    name: string;
    placeholder?: string;
    onChange?: any;
    type: string;
    error?: any;
    disabled?: boolean;
    value?: string;
    label?: string;
    style?: any;
}

const TextFieldGroup: React.FC<Props> = ({
    name,
    placeholder,
    onChange,
    error,
    value,
    type,
    label,
    style,
}) => {
    return (
        <div style={style}>
            {type === 'checkbox' ? (
                <Checkbox
                    className="card-field"
                    name={name}
                    onChange={(e: any) => onChange(e)}
                    label={label}
                />
            ) : type === 'textarea' ? (
                <TextField
                    label={label}
                    name={name}
                    onChange={(e) => onChange(e)}
                    onRenderDescription={() => errorData({ error: checkErrors(name, error) })}
                    value={value}
                    multiline
                    rows={5}
                />
            ) : (
                <TextField
                    className="card-field"
                    label={label}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    onChange={(e) => onChange(e)}
                    onRenderDescription={() => errorData({ error: checkErrors(name, error) })}
                    value={value}
                />
            )}
        </div>
    );
};

export { TextFieldGroup };
