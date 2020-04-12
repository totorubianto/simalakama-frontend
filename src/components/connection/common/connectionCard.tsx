import React from 'react';
import Card from '../../global/style/card';
import Persona from '../../global/common/persona/Persona';
import { PersonaSize, PersonaMode } from '../../global/common/persona/enum/persona-size.enum';
import { Button } from '../../global/common';
import { addFriend } from '../../../stores/friend/action';
import { connect } from 'react-redux';
interface Props {
    user: any;
    addFriend: Function;
}

const ConnectionCard: React.FC<Props> = ({ user, addFriend }) => {
    const onInviteFriend = (id: any) => {
        addFriend(id);
    };
    return (
        <>
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
                    imgURL={user?.avatar?.url}
                    to={`user/${user.username}`}
                    mode={PersonaMode.VERTICAL}
                    textTitle={user.firstName + ' ' + user.lastName}
                    textSubtitle="Software Engginer"
                />

                <Button
                    iconProps="Add"
                    value="Add Friends"
                    type="button"
                    style={{ marginTop: '20px' }}
                    onClick={() => onInviteFriend(user._id)}
                />
            </Card>
        </>
    );
};

export default connect(null, { addFriend })(ConnectionCard);
