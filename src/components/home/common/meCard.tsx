import React from 'react';
import Card from '../../global/style/card';
import Persona from '../../global/common/persona/Persona';
import { PersonaSize, PersonaMode } from '../../global/common/persona/enum/persona-size.enum';
import { connect } from 'react-redux';
interface Props {
    user: any;
}

const MeCard: React.FC<Props> = ({ user }) => {
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

export default connect(null, {})(MeCard);
