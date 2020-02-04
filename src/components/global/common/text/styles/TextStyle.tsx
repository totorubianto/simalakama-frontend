import styled from 'styled-components';
import { TextSize, getNum, Margin } from '../enum/text.enum';

interface Props {
    padding?: string;
    margin?: Margin;
    height?: string;
    fontSize: TextSize;
}

const TextStyleHeadline = styled.h3<Props>`
    ${(props: any) => {
        if (props.margin) {
            const margin = Object.keys(props.margin);
            let text: string = '';
            let textString: string = '';
            margin.map(data => {
                textString = `margin-${data}: ${props.margin[data]}px;`;
                text = text.concat(textString);
            });
            return text;
        }
    }}
    font-size: ${(props: any) => getNum(props.fontSize)}px;
`;

const TextStyleParagraph = styled.p<Props>`
    margin: 0px;
    font-size: ${(props: any) => getNum(props.fontSize)}px;
`;

export { TextStyleHeadline, TextStyleParagraph };
