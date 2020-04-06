import React, { useEffect } from 'react';
import ConnectionCard from './common/connectionCard';
import { connect } from 'react-redux';
import { getUsersFriend } from '../../stores/friend/action';
import { getPendingFriend } from '../../stores/friend/action';
import RequestFriends from './common/requestFriends';
import Text from '../global/common/text/Text';
import { TextSize, TextType } from '../global/common/text/enum/text.enum';
import MeCard from '../home/common/meCard';
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
    }, [getPendingFriend]);
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-3">
                    <MeCard></MeCard>
                </div>
                <div className="col-md-9">
                    <Text
                        type={TextType.HEADLINE}
                        textSize={TextSize.MEDIUM}
                        text="Perminataan Pertemanan"
                        margin={{ top: 0, bottom: 20 }}
                    ></Text>

                    {friends?.request?.length !== 0 ? (
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
                        <div className="row">
                            {friends.users.map((user: any, i: number) => (
                                <div key={i} className="col-md-4">
                                    <ConnectionCard user={user} key={i}></ConnectionCard>
                                </div>
                            ))}
                        </div>
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
