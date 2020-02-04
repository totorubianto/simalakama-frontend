import React from 'react';
import Card from '../../global/style/Card';
import Persona from '../../global/common/persona/Persona';
import { PersonaSize, PersonaMode } from '../../global/common/persona/enum/persona-size.enum';
import { Button } from '../../global/common';
import { addFriend } from '../../../stores/user/action';
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
        <div className="col-md-4">
            <Card
                margin="0,0,0,0"
                padding="20"
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

                {/* <DefaultButton
                    toggle
                    checked={muted || checked}
                    text={muted ? 'Volume muted' : 'Volume unmuted'}
                    iconProps={muted ? volume0Icon : volume3Icon}
                    onClick={onClick}
                    allowDisabledFocus
                    disabled={disabled}
                /> */}
            </Card>
        </div>
    );
};

export default connect(null, { addFriend })(ConnectionCard);
