import React from 'react';
import { TextField, PrimaryButton } from 'office-ui-fabric-react';
import PostStyle from '../styles/postStyle';
interface Props {}

const post: React.FC<Props> = () => {
    return (
        <PostStyle>
            <div className="create-post">
                <TextField label="Buat Post" multiline rows={5} />
                <PrimaryButton text="Kirim" allowDisabledFocus disabled={false} checked={false} />
            </div>
        </PostStyle>
    );
};

export default post;
