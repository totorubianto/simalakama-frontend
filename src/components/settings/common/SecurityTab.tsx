import React, { useState } from 'react';
import { Text, TextField, PrimaryButton } from 'office-ui-fabric-react';
import { errorData, checkErrors } from '../../global/common/error';
import { updatePassword } from '../../../stores/user/action';
import { connect } from 'react-redux';
interface Props {
    error: any;
    auth: any;
    updatePassword: any;
}

const SecurityTab: React.FC<Props> = ({ error, updatePassword, auth: { user } }) => {
    const [formUpdateProfile, setFormUpdateProfile] = useState({
        oldPassword: '',
        newPassword: '',
        newPasswordConfirmation: '',
    });
    const onChangeTextField = (e: any) => {
        setFormUpdateProfile({
            ...formUpdateProfile,
            [e.target.name]: e.target.value,
        });
    };
    const { oldPassword, newPassword, newPasswordConfirmation } = formUpdateProfile;
    const onUpdateProfile = () => {
        updatePassword({ oldPassword, newPassword, newPasswordConfirmation });
    };

    return (
        <div className="tab">
            <Text variant="xLarge">Security</Text>
            <div className="row">
                <div className="col-md-6">
                    <TextField
                        label="Old Password"
                        name="oldPassword"
                        onRenderDescription={() =>
                            errorData({
                                error: checkErrors('oldPassword', error),
                            })
                        }
                        onChange={(e: any) => onChangeTextField(e)}
                        value={oldPassword}
                        placeholder="input old password"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <TextField
                        label="New Password"
                        name="newPassword"
                        onRenderDescription={() =>
                            errorData({
                                error: checkErrors('newPassword', error),
                            })
                        }
                        onChange={(e: any) => onChangeTextField(e)}
                        value={newPassword}
                        placeholder="input new password"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <TextField
                        label="New Password Confirmation"
                        name="newPasswordConfirmation"
                        onRenderDescription={() =>
                            errorData({
                                error: checkErrors('newPasswordConfirmation', error),
                            })
                        }
                        onChange={(e: any) => onChangeTextField(e)}
                        value={newPasswordConfirmation}
                        placeholder="new password confirmation"
                    />
                </div>
            </div>
            <PrimaryButton onClick={() => onUpdateProfile()}>Save the Changes</PrimaryButton>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    auth: state.auth,
    error: state.error,
});

export default connect(mapStateToProps, { updatePassword })(SecurityTab);
