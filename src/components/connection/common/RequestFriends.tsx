import React from 'react';
import Card from '../../global/style/Card';
import { Button } from '../../global/common';
import { ButtonGroup } from '../../global/style/ButtonGroup';
import Persona from '../../global/common/persona/Persona';
import { PersonaSize, PersonaMode } from '../../global/common/persona/enum/persona-size.enum';

interface Props {
    user: any;
}

const RequestFriends: React.FC<Props> = ({ user }) => {
    return (
        <Card padding={{ all: 20 }} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <Persona
                    imgURL={user.avatar.url}
                    width={PersonaSize.SMALL}
                    mode={PersonaMode.HORIZONTAL}
                    textTitle={user.firstName + ' ' + user.lastName}
                    textSubtitle="Software Engginer"
                ></Persona>
            </div>
            {/* <div>{`${user.firstName} ${user.lastName}`}</div> */}
            <ButtonGroup>
                <Button value="Confirm" type="button" />
                <Button value="Reject" type="button" />
            </ButtonGroup>
        </Card>
    );
};

export default RequestFriends;
