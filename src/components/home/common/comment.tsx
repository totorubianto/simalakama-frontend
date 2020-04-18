import React, { useState } from 'react';
import CommentPost from '../styles/commentStyle';
import { TextFieldGroup, Button } from '../../global/common';
import { inputType } from '../../global/utils/inputType';
import { ButtonGroup } from 'components/global/style/buttonGroup';

interface Props {}

const Comment: React.FC<Props> = () => {
    const [comment, setComment] = useState({
        comment: '',
    });
    const onChange = (e: any) => {
        console.log(e);
        inputType(e, comment, setComment);
    };
    return (
        <CommentPost>
            <ButtonGroup>
                <TextFieldGroup
                    type="text"
                    name="comment"
                    value={comment.comment}
                    placeholder="Masukan komentar"
                    onChange={(e: any) => onChange(e)}
                    style={{ width: '80%' }}
                />
                <Button
                    value="Kirim"
                    style={{ width: '20% !important', marginRight: '0px !important' }}
                    type="button"
                ></Button>
            </ButtonGroup>
        </CommentPost>
    );
};

export default Comment;
