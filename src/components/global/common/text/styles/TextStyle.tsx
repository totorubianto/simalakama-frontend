import styled from 'styled-components';
import { TextSize, getNum } from '../enum/text.enum';
import { margin } from '../../../utils/marginPadding';
import { MarginPadding } from '../../../interfaces/marginPadding';

interface Props {
    padding?: string;
    margin?: MarginPadding;
    height?: string;
    fontSize: TextSize;
}

const TextStyleHeadline = styled.h3<Props>`
    ${(props: any) => (props.margin ? margin(props.margin) : 'margin: 0px')}
    font-size: ${(props: any) => getNum(props.fontSize)}px;
`;

const TextStyleParagraph = styled.p<Props>`
    margin: 0px;
    font-size: ${(props: any) => getNum(props.fontSize)}px;
`;

export { TextStyleHeadline, TextStyleParagraph };
