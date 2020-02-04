import React from 'react';
import { TextStyleHeadline, TextStyleParagraph } from './styles/TextStyle';
import { TextType, TextSize } from './enum/text.enum';
import { MarginPadding } from '../../interfaces/marginPadding';

interface Props {
    type: TextType;
    text: string;
    textSize: TextSize;
    margin?: MarginPadding;
}

const Text: React.FC<Props> = ({ type, text, textSize, margin }) => {
    return type === TextType.HEADLINE ? (
        <TextStyleHeadline fontSize={textSize} margin={margin}>
            {text}
        </TextStyleHeadline>
    ) : type === TextType.PARAGRAPH ? (
        <TextStyleParagraph fontSize={textSize} margin={margin}>
            {text}
        </TextStyleParagraph>
    ) : (
        <div>
            <div>asdasd</div>
        </div>
    );
};

export default Text;
