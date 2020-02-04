import styled from 'styled-components';

const PersonaVerticalStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const PersonaHorizontalStyle = styled.div`
    display: flex;
    align-items: center;
    img {
        object-fit: cover;
        margin-right: 10px;
    }
    .text-group {
        display: flex;
        flex-direction: column;
    }
`;

export { PersonaVerticalStyle, PersonaHorizontalStyle };
