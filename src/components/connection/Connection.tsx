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
    }, [getUsers]);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-9">
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
});

export default connect(mapStateToProps, { getUsers })(Connection);
