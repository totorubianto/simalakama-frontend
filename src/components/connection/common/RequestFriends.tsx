import React from 'react';
import Card from '../../global/style/Card';
import { Button } from '../../global/common';
import { ButtonGroup } from '../../global/style/ButtonGroup';

interface Props {
    user: any;
}

const RequestFriends: React.FC<Props> = ({ user }) => {
    return (
        <Card padding="15" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>{`${user.firstName} ${user.lastName}`}</div>
            <ButtonGroup>
                <Button value="Confirm" type="button" />
                <Button value="Reject" type="button" />
            </ButtonGroup>
        </Card>
    );
};

export default RequestFriends;
