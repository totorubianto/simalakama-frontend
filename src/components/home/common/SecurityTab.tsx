import React, { useState } from 'react';
import { Text, TextField, PrimaryButton } from 'office-ui-fabric-react';
import { errorData, checkErrors } from '../../global/common/error';
import { updateProfile } from '../../../stores/user/action';
import { connect } from 'react-redux';
interface Props {
    error: any;
    auth: any;
    updateProfile: any;
}

const SecurityTab: React.FC<Props> = ({ error, updateProfile, auth: { user } }) => {
    const [formUpdateProfile, setFormUpdateProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    const { email: emailData, firstName: firstNameData, lastName: lastNameData } = user;
    const onChangeTextField = (e: any) => {
        setFormUpdateProfile({
            ...formUpdateProfile,
            [e.target.name]: e.target.value,
        });
    };
    const { email, firstName, lastName } = formUpdateProfile;
    const onUpdateProfile = () => {
        updateProfile({ firstName, lastName, email });
    };

    return (
        <div className="tab">
            <Text variant="xLarge">Security</Text>
            <div className="row">
                <div className="col-md-6">
                    <TextField
                        label="First Name"
                        name="firstName"
                        onRenderDescription={() =>
                            errorData({
                                error: checkErrors('firstName', error),
                            })
                        }
                        onChange={(e: any) => onChangeTextField(e)}
                        value={firstName}
                        placeholder={firstNameData}
                    />
                </div>
                <div className="col-md-6">
                    <TextField
                        label="Last Name"
                        name="lastName"
                        onRenderDescription={() =>
                            errorData({ error: checkErrors('lastName', error) })
                        }
                        onChange={(e: any) => onChangeTextField(e)}
                        value={lastName}
                        placeholder={lastNameData}
                    />
                </div>
                <div className="col-md-6">
                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        onRenderDescription={() =>
                            errorData({ error: checkErrors('email', error) })
                        }
                        onChange={(e: any) => onChangeTextField(e)}
                        value={email}
                        placeholder={emailData}
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

export default connect(mapStateToProps, { updateProfile })(SecurityTab);
