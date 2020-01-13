import React, { useState, useEffect } from 'react';
import { Text, TextField, PrimaryButton } from 'office-ui-fabric-react';
import { errorData, checkErrors } from '../../global/common/error';
import { updateProfile } from '../../../stores/user/action';
import { IPersonaSharedProps, Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { connect } from 'react-redux';
import { updateAvatar } from '../../../stores/user/action';
interface Props {
    error: any;
    auth: any;
    updateProfile: any;
    updateAvatar: any;
}

const AccountTab: React.FC<Props> = ({ error, updateProfile, updateAvatar, auth: { user } }) => {
    useEffect(() => {
        const { firstName: firstNameData, lastName: lastNameData } = user;
        setFormUpdateProfile({
            firstName: firstNameData,
            lastName: lastNameData,
            email: '',
        });
    }, [user]);

    const [formUpdateProfile, setFormUpdateProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    const onChangeTextField = (e: any) => {
        setFormUpdateProfile({
            ...formUpdateProfile,
            [e.target.name]: e.target.value,
        });
    };

    const { email, firstName, lastName } = formUpdateProfile;
    const { email: emailData, firstName: firstNameData, lastName: lastNameData } = user;
    const examplePersona: IPersonaSharedProps = {
        imageUrl: 'https://cf.shopee.co.id/file/c3deb1bcc9a9ab2337d21fe007b661eb',
        imageInitials: 'AL',
        text: `${firstNameData} ${lastNameData}`,
        secondaryText: 'Software Engineer',
        optionalText: 'Available at 4:00pm',
    };
    const onUpdateProfile = () => {
        updateProfile({ firstName, lastName, email });
    };
    const changeAvatar = (e: any) => {
        updateAvatar(e.target.files[0]);
    };

    return (
        <div className="tab">
            <Text variant="xLarge">General</Text>
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between align-items-center">
                        <Persona
                            className="mb-3 mt-3"
                            {...examplePersona}
                            size={PersonaSize.size72}
                            imageAlt="Annie Lindqvist, status is dnd"
                        />
                        <PrimaryButton
                            iconProps={{ iconName: 'CloudUpload' }}
                            style={{ position: 'relative', overflow: 'hidden' }}
                            onRenderChildren={() => (
                                <input
                                    type="file"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        minWidth: '100%',
                                        minHeight: '100%',
                                        fontSize: '100px',
                                        textAlign: 'right',
                                        filter: 'alpha(opacity=0)',
                                        opacity: 0,
                                        outline: 'none',
                                        background: 'white',
                                        cursor: 'inherit',
                                        display: 'block',
                                    }}
                                    onChange={(e: any) => changeAvatar(e)}
                                    id="file"
                                />
                            )}
                        >
                            Upload
                        </PrimaryButton>
                    </div>
                </div>
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

export default connect(mapStateToProps, { updateProfile, updateAvatar })(AccountTab);
