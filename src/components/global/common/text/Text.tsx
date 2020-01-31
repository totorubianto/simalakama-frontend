import React from 'react';

enum PrintMedia {
    HEADLINE = 'NEWSPAPER',
    PARAGRAPH = 'NEWSLETTER',
}

interface Props {
    type: PrintMedia;
}

const Text: React.FC<Props> = ({ type }) => {
    return type === PrintMedia.HEADLINE ? (
        <div>
            <div>Headline</div>
        </div>
    ) : type === PrintMedia.PARAGRAPH ? (
        <div>
            <div>paragraph</div>
        </div>
    ) : (
        <div>
            <div>asdasd</div>
        </div>
    );
};

export default Text;
