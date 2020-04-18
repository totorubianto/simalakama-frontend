import React from 'react';

interface Props {
    name: string;
    onChange?: any;
    disabled?: boolean;
    label?: string;
    multiple: boolean;
}

const FileFieldGroup = (props: Props) => {
    return (
        <div>
            <input
                type="file"
                multiple={props.multiple}
                disabled={props.disabled}
                name={props.name}
                onChange={(e: any) => props.onChange(e)}
            />
        </div>
    );
};

export default FileFieldGroup;
