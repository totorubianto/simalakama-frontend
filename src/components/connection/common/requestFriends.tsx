import React from 'react';
import Card from '../../global/style/card';
import { Button } from '../../global/common';
import { ButtonGroup } from '../../global/style/buttonGroup';
import Persona from '../../global/common/persona/Persona';
import { PersonaSize, PersonaMode } from '../../global/common/persona/enum/persona-size.enum';
import { confirmFriend, rejectFriend } from '../../../stores/friend/action';
import { connect } from 'react-redux';
interface Props {
    user: any;
    id: string;
    confirmFriend: Function;
    rejectFriend: Function;
}

const RequestFriends: React.FC<Props> = ({ user, id, confirmFriend, rejectFriend }) => {
    const onConfirm = (id: string) => {
        confirmFriend(id);
    };
    const onReject = (id: string) => {
        rejectFriend(id);
    };
    return (
        <Card padding={{ all: 20 }} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <Persona
                    imgURL={user.avatar?.url}
                    width={PersonaSize.SMALL}
                    mode={PersonaMode.HORIZONTAL}
                    to={`user/${user.username}`}
                    textTitle={user.firstName + ' ' + user.lastName}
                    textSubtitle="Software Engginer"
                ></Persona>
            </div>
            <ButtonGroup>
                <Button value="Confirm" onClick={() => onConfirm(id)} type="button" />
                <Button value="Reject" onClick={() => onReject(id)} type="button" />
            </ButtonGroup>
        </Card>
    );
};

export default connect(null, { confirmFriend, rejectFriend })(RequestFriends);
