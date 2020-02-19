import React from 'react';
import Card from '../../global/style/card';
import Persona from '../../global/common/persona/Persona';
import { PersonaSize, PersonaMode } from '../../global/common/persona/enum/persona-size.enum';
import { connect } from 'react-redux';
interface Props {
    auth: any;
}

const MeCard: React.FC<Props> = ({ auth: { loading, user } }) => {
    return (
        <Card
            margin={{ bottom: 20 }}
            padding={{ all: 20 }}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <Persona
                width={PersonaSize.BIG}
                imgURL="https://cf.shopee.co.id/file/c3deb1bcc9a9ab2337d21fe007b661eb"
                to={`user/${user.username}`}
                mode={PersonaMode.VERTICAL}
                textTitle={user.firstName + ' ' + user.lastName}
                textSubtitle="Software Engginer"
            />
        </Card>
    );
};
const mapStateToProps = (state: any) => ({
    auth: state.auth,
    error: state.error,
    posts: state.posts,
});
export default connect(mapStateToProps, {})(MeCard);
