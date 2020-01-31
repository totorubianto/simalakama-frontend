import React, { useEffect } from 'react';
import ConnectionCard from './common/ConnectionCard';
import { connect } from 'react-redux';
import { getUsers } from '../../stores/user/action';

interface Props {
    users: any;
    getUsers: Function;
}

const Connection: React.FC<Props> = ({ users: { users }, getUsers }) => {
    useEffect(() => {
        getUsers();
    });
    return (
        <div className="container">
            <div className="row">
                {users.map((user: any, i: number) => (
                    <ConnectionCard key={i}></ConnectionCard>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    auth: state.auth,
    error: state.error,
    users: state.users,
});

export default connect(mapStateToProps, { getUsers })(Connection);
