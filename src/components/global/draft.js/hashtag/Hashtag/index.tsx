import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export default class Hashtag extends Component {
    deleteHashtag = (hashtag: string) => {
        const hashtagNew = hashtag.split('#');
        console.log(hashtagNew[1]);
        return hashtagNew[1];
    };
    render() {
        const {
            theme = {},
            decoratedText,
            className, // eslint-disable-next-line
            blockKey,
            getEditorState,
            setEditorState,
            offsetKey,
            entityKey,
            contentState,
            ...otherProps
        }: any = this.props; // eslint-disable-next-line
        const combinedClassName = clsx(theme.hashtag, className);
        return (
            <Link to={`?hashtag=${this.deleteHashtag(decoratedText)}`}>
                <span {...otherProps} className={combinedClassName}></span>
            </Link>
        );
    }
}
