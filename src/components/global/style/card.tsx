import styled from 'styled-components';
import { MarginPadding } from '../interfaces/marginPadding';
import { padding, margin } from '../utils/marginPadding';
interface Props {
    padding?: MarginPadding;
    margin?: MarginPadding;
    height?: string;
}

const Card = styled.div<Props>`
    -webkit-box-shadow: 1px 10px 51px -1px rgba(153, 153, 153, 0.28);
    -moz-box-shadow: 1px 10px 51px -1px rgba(153, 153, 153, 0.28);
    box-shadow: 1px 10px 51px -1px rgba(153, 153, 153, 0.28);
    border: 1px solid #e6e6e6;
    background: white;
    ${(props: any) => (props.padding ? padding(props.padding) : 'padding:0px')}
    ${(props: any) => (props.margin ? margin(props.margin) : 'margin:0px')}
    height: ${(props: any) => (props.height ? props.height + '%' : '')};
`;

export default Card;
