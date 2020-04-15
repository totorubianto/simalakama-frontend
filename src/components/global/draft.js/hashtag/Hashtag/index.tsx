import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export default class Hashtag extends Component {
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
            <Link to={`?hashtag=${decoratedText}`}>
                <span {...otherProps} className={combinedClassName}></span>
            </Link>
        );
    }
}
