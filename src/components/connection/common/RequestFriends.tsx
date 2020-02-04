import React, { useEffect, useState } from 'react';
import Card from '../../global/style/Card';
import { Button } from '../../global/common';
import { ButtonGroup } from '../../global/style/ButtonGroup';
import Persona from '../../global/common/persona/Persona';
import { PersonaSize, PersonaMode } from '../../global/common/persona/enum/persona-size.enum';
import { confirmFriend } from '../../../stores/friend/action';
import { connect } from 'react-redux';
interface Props {
    user: any;
    id: string;
    confirmFriend: Function;
}

const RequestFriends: React.FC<Props> = ({ user, id, confirmFriend }) => {
    const onConfirm = (id: string) => {
        confirmFriend(id);
    };
    return (
        <Card padding={{ all: 20 }} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <Persona
                    imgURL={user && user.avatar && user.avatar.url}
                    width={PersonaSize.SMALL}
                    mode={PersonaMode.HORIZONTAL}
                    textTitle={user && user.firstName + ' ' + user.lastName}
                    textSubtitle="Software Engginer"
                ></Persona>
            </div>
            <ButtonGroup>
                <Button value="Confirm" onClick={() => onConfirm(id)} type="button" />
                <Button value="Reject" type="button" />
            </ButtonGroup>
        </Card>
    );
};

export default connect(null, { confirmFriend })(RequestFriends);
