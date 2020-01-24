// for input (text, email, password, date)

import React from 'react';
import { TextField } from 'office-ui-fabric-react';
import { errorData, checkErrors } from '../error';

interface Props {
    name: string;
    placeholder?: string;
    onChange?: any;
    type: string;
    error: string;
    disabled?: string;
    value: string;
    label?: string;
}

const TextFieldGroup: React.FC<Props> = ({
    name,
    placeholder,
    onChange,
    error,
    value,
    type,
    label,
}) => {
    return (
        <div>
            <TextField
                className="card-field"
                label={label}
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={e => onChange(e)}
                onRenderDescription={() => errorData({ error: checkErrors(name, error) })}
                value={value}
            />
        </div>
    );
};

export default TextFieldGroup;
