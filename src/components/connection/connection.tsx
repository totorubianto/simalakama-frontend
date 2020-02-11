import React, { useEffect } from 'react';
import ConnectionCard from './common/connectionCard';
import { connect } from 'react-redux';
import { getUsersFriend } from '../../stores/friend/action';
import { getPendingFriend } from '../../stores/friend/action';
import RequestFriends from './common/requestFriends';
import Text from '../global/common/text/Text';
import { TextSize, TextType } from '../global/common/text/enum/text.enum';
interface Props {
    getUsersFriend: Function;
    getPendingFriend: Function;
    friends: any;
}

const Connection: React.FC<Props> = ({ getUsersFriend, friends, getPendingFriend }) => {
    useEffect(() => {
        getUsersFriend();
    }, [getUsersFriend]);

    useEffect(() => {
        getPendingFriend();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-9">
                    <Text
                        type={TextType.HEADLINE}
                        textSize={TextSize.MEDIUM}
                        text="Perminataan Pertemanan"
                        margin={{ top: 20, bottom: 20 }}
                    ></Text>

                    {friends.request.length !== 0 ? (
                        friends.request.map((user: any, i: number) => (
                            <RequestFriends
                                key={i}
                                user={user.requester}
                                id={user._id}
                            ></RequestFriends>
                        ))
                    ) : (
                        <Text
                            type={TextType.PARAGRAPH}
                            textSize={TextSize.NORMAL}
                            text="Tidak ada request pertemanan"
                        ></Text>
                    )}
                    <Text
                        type={TextType.HEADLINE}
                        textSize={TextSize.MEDIUM}
                        text="Rekomendasi Teman"
                        margin={{ top: 20, bottom: 20 }}
                    ></Text>

                    {friends.users.length !== 0 ? (
                        friends.users.map((user: any, i: number) => (
                            <div className="row">
                                <ConnectionCard user={user} key={i}></ConnectionCard>
                            </div>
                        ))
                    ) : (
                        <Text
                            type={TextType.PARAGRAPH}
                            textSize={TextSize.NORMAL}
                            text="Tidak ada rekomendasi pertemanan"
                        ></Text>
                    )}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    auth: state.auth,
    error: state.error,
    friends: state.friends,
});

export default connect(mapStateToProps, { getUsersFriend, getPendingFriend })(Connection);
