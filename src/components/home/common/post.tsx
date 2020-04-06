import React, { useState } from 'react';
import PostStyle from '../styles/postStyle';
import { connect } from 'react-redux';
import { createPost } from '../../../stores/post/action';
import { Button } from '../../global/common';
import { inputType } from '../../global/utils/inputType';
import { TextFieldGroup } from '../../global/common/index';
interface Props {
    createPost: Function;
    error: any;
}

const Post: React.FC<Props> = ({ createPost, error }) => {
    const [fieldCreatePost, setFieldCreatePost] = useState({
        content: '',
    });
    const { content } = fieldCreatePost;
    const onPost = () => {
        createPost(fieldCreatePost.content, null);
    };
    const onChangeTextField = (e: any) => {
        inputType(e, fieldCreatePost, setFieldCreatePost);
    };
    return (
        <PostStyle>
            <div className="create-post">
                <TextFieldGroup
                    type="textarea"
                    name="content"
                    onChange={onChangeTextField}
                    error={error}
                    value={content}
                    label="Buat Post"
                />
                <Button type="button" value="Kirim" onClick={onPost}></Button>
            </div>
        </PostStyle>
    );
};

const mapStateToProps = (state: any) => ({
    posts: state.posts,
    error: state.error,
});

export default connect(mapStateToProps, { createPost })(Post);
