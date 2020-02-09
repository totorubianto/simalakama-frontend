import styledComponent from 'styled-components';
const User = styledComponent.section`
    margin-top:60px;

    .cover{
        &-img{
            width: 100%;
            height: 250px;
            background-color: #3282b8;
        }
        &-content{
            padding: 20px;
            background-color : white;
        }
    }
}
`;

export default User;
