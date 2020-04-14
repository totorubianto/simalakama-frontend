import React, { useEffect } from 'react';
import Card from '../../global/style/card';
import { getFriend } from '../../../stores/friend/action';
import { connect } from 'react-redux';
import { PrimaryButton } from 'office-ui-fabric-react';
import Image from '../../global/common/image/Image';

interface Props {
    getFriend: Function;
    friends: any;
}

const Friends: React.FC<Props> = ({ getFriend, friends: { friends } }) => {
    useEffect(() => {
        getFriend();
        // eslint-disable-next-line
    }, []);
    return (
        <Card
            margin={{ all: 0 }}
            padding={{ all: 0 }}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <div className="p-1">
                <div className="row no-gutters">
                    {friends.map((data: any, i: number) => (
                        <div key={i} className="col-md-4">
                            <Image
                                src={data.friend.avatar.url}
                                fallback="/assets/images/avatar_default.png"
                                alt={data.friend.avatar.key}
                                style={{
                                    width: '100%',
                                }}
                            ></Image>
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-3">
                <PrimaryButton
                    width="100%"
                    text="Lihat semua teman"
                    disabled={false}
                    checked={false}
                />
            </div>
        </Card>
    );
};

const mapStateToProps = (state: any) => ({
    friends: state.friends,
});
export default connect(mapStateToProps, { getFriend })(Friends);
