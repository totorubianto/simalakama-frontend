import React from 'react';
import { FileStyle } from './styles/fileStyle';
interface Props {
    name: string;
    onChange?: any;
    disabled?: boolean;
    label?: string;
    multiple: boolean;
}

const FileFieldGroup = (props: Props) => {
    return (
        <FileStyle>
            <button className="btn">Images</button>
            <input
                className="files"
                type="file"
                multiple={props.multiple}
                disabled={props.disabled}
                name={props.name}
                onChange={(e: any) => props.onChange(e)}
            />
        </FileStyle>
    );
};

export default FileFieldGroup;
