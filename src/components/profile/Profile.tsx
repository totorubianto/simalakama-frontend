import React, { useEffect } from 'react';
import { useParam } from '../global/utils/reactRouter';
import UserStyle from './styles/UserStyle';
import Card from '../global/style/Card';
interface Props {}

const Profile: React.FC<Props> = () => {
    const { username }: any = useParam();
    useEffect(() => {
        console.log(username);
    }, [username]);
    return (
        <UserStyle>
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
        </UserStyle>
    );
};

export default Profile;
