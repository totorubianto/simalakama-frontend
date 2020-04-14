import React, { Component } from 'react';
import clsx from 'clsx';

export default class Hashtag extends Component {
    render() {
        const {
            theme = {},
            className, // eslint-disable-next-line
            ...otherProps
        }: any = this.props; // eslint-disable-next-line
        console.log(this.props);
        const combinedClassName = clsx(theme.hashtag, className);
        return <span {...otherProps} className={combinedClassName}></span>;
    }
}
