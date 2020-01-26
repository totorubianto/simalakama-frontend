import React, { useState } from 'react';
import { Text } from 'office-ui-fabric-react';
import { updatePassword } from '../../../stores/user/action';
import { connect } from 'react-redux';
import { inputType } from '../../global/utils/inputType';
import { TextFieldGroup, Button } from '../../global/common';
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
        inputType(e, formUpdateProfile, setFormUpdateProfile);
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
                    <TextFieldGroup
                        label="Old Password"
                        name="oldPassword"
                        error={error}
                        type="password"
                        onChange={onChangeTextField}
                        value={oldPassword}
                        placeholder="input old password"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <TextFieldGroup
                        label="New Password"
                        name="newPassword"
                        error={error}
                        type="password"
                        onChange={onChangeTextField}
                        value={newPassword}
                        placeholder="input new password"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <TextFieldGroup
                        label="New Password Confirmation"
                        name="newPasswordConfirmation"
                        error={error}
                        type="password"
                        onChange={onChangeTextField}
                        value={newPasswordConfirmation}
                        placeholder="new password confirmation"
                    />
                </div>
            </div>
            <Button value="Save the Changes" type="button" onClick={onUpdateProfile} />
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    auth: state.auth,
    error: state.error,
});

export default connect(mapStateToProps, { updatePassword })(SecurityTab);
