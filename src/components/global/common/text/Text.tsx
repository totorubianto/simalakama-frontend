import React from 'react';
import { TextStyleHeadline, TextStyleParagraph } from './styles/TextStyle';
import { TextType, TextSize } from './enum/text.enum';

interface Props {
    type: TextType;
    text: string;
    textSize: TextSize;
}

const Text: React.FC<Props> = ({ type, text, textSize }) => {
    return type === TextType.HEADLINE ? (
        <TextStyleHeadline fontSize={textSize}>{text}</TextStyleHeadline>
    ) : type === TextType.PARAGRAPH ? (
        <TextStyleParagraph fontSize={textSize}>{text}</TextStyleParagraph>
    ) : (
        <div>
            <div>asdasd</div>
        </div>
    );
};

export default Text;
