import * as React from 'react';
import Link from './Link';
import linkStrategy from './linkStrategy';

export default (config = {}) => {
    // Styles are overwritten instead of merged as merging causes a lot of confusion.

    // Why? Because when merging a developer needs to know all of the underlying
    // styles which needs a deep dive into the code. Merging also makes it prone to
    // errors when upgrading as basically every styling change would become a major
    // breaking change. 1px of an increased padding can break a whole layout.

    const { component, theme = {}, target = '_self', rel = 'noreferrer noopener' }: any = config;

    const DecoratedLink = (props: any) => (
        <Link {...props} theme={theme} target={target} rel={rel} component={component} />
    );

    return {
        decorators: [
            {
                strategy: linkStrategy,
                component: DecoratedLink,
            },
        ],
    };
};
