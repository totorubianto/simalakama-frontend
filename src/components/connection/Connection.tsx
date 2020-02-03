import React, { useEffect } from 'react';
import ConnectionCard from './common/ConnectionCard';
import { connect } from 'react-redux';
import { getUsers } from '../../stores/user/action';
import { getPendingFriend } from '../../stores/friend/action';
import RequestFriends from './common/RequestFriends';
interface Props {
    users: any;
    getUsers: Function;
    getPendingFriend: Function;
    friends: any;
}

const Connection: React.FC<Props> = ({ users: { users }, getUsers, friends, getPendingFriend }) => {
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    useEffect(() => {
        getPendingFriend();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-9">
                    {friends.users.map((user: any) => (
                        <RequestFriends user={user.requester}></RequestFriends>
                    ))}

                    <div className="row">
                        {users.map((user: any, i: number) => (
                            <ConnectionCard user={user} key={i}></ConnectionCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    auth: state.auth,
    error: state.error,
    users: state.users,
    friends: state.friends,
});

export default connect(mapStateToProps, { getUsers, getPendingFriend })(Connection);
