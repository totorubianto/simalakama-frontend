import React from 'react';

interface Props {
    user: any;
}

const RequestFriends: React.FC<Props> = ({ user }) => {
    return (
        <div>
            <div>{user.firstName}</div>
        </div>
    );
};

export default RequestFriends;
