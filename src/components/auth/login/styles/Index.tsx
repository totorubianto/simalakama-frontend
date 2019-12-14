import styledComponent from 'styled-components';
const LoginStyle = styledComponent.section`
    .card{
        -webkit-box-shadow: 1px 10px 51px -1px rgba(153, 153, 153, 0.28);
        -moz-box-shadow: 1px 10px 51px -1px rgba(153, 153, 153, 0.28);
        box-shadow: 1px 10px 51px -1px rgba(153, 153, 153, 0.28);
        border: 1px solid #e6e6e6;
        background: white;
        padding: 30px;
        margin-top :60px;
        margin-right:60px;
        margin-left:60px;
        &-field{
            margin-bottom :20px;
        }
        &-forgotPassword{
            display:flex;
            justify-content: space-between;
        }
    }
}
`;

export default LoginStyle;
