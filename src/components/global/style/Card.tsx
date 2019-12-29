import styled from "styled-components";
interface Props {
  padding?: string;
  margin?: string;
}

const Card = styled.section<Props>`
  -webkit-box-shadow: 1px 10px 51px -1px rgba(153, 153, 153, 0.28);
  -moz-box-shadow: 1px 10px 51px -1px rgba(153, 153, 153, 0.28);
  box-shadow: 1px 10px 51px -1px rgba(153, 153, 153, 0.28);
  border: 1px solid #e6e6e6;
  background: white;
  padding: ${(props: any) =>
    props.padding
      ? props.padding
          .replace(" ", "")
          .split(",")
          .map((data: any) => data + "px ")
      : "0px"};
  margin: ${(props: any) =>
    props.margin
      ? props.margin
          .replace(" ", "")
          .split(",")
          .map((data: any) => data + "px ")
      : "0px"};
`;

export default Card;
