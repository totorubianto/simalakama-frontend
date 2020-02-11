import React, { useEffect } from 'react';
import { useParam } from '../global/utils/reactRouter';
import ProfileStyle from './styles/profileStyle';
import Card from '../global/style/card';
interface Props {}

const Profile: React.FC<Props> = () => {
    const { username }: any = useParam();
    useEffect(() => {
        console.log(username);
    }, [username]);
    return (
        <ProfileStyle>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <Card>
                            <div className="cover">
                                <div className="cover-img">
                                    <img src="" alt="" />
                                </div>
                                <div className="cover-content">asdasd</div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-3">asdasda</div>
                </div>
            </div>
        </ProfileStyle>
    );
};

export default Profile;
