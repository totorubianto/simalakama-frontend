import styled from 'styled-components';
import { TextSize, getNum } from '../enum/text.enum';

interface Props {
    padding?: string;
    margin?: string;
    height?: string;
    fontSize: TextSize;
}

const TextStyleHeadline = styled.h3<Props>`
    margin-bottom:10px
    font-size: ${(props: any) => getNum(props.fontSize)}px;
`;

const TextStyleParagraph = styled.p<Props>`
    margin: 0px;
    font-size: ${(props: any) => getNum(props.fontSize)}px;
`;

export { TextStyleHeadline, TextStyleParagraph };
