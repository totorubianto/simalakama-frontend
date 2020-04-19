import React, { useState, useEffect, useCallback } from 'react';
import { Text } from 'office-ui-fabric-react';
import { updateProfile } from '../../../stores/user/action';
import { IPersonaSharedProps, Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { connect } from 'react-redux';
import { updateAvatar } from '../../../stores/user/action';
import { logoutAll } from '../../../stores/auth/action';
import { ButtonGroup } from '../../global/style/buttonGroup';
import { TextFieldGroup, Button } from '../../global/common';
import { inputType } from '../../global/utils/inputType';
import Cropper from 'react-easy-crop';
import getCroppedImg from './crop';
interface Props {
    error: any;
    auth: any;
    updateProfile: any;
    updateAvatar: any;
    logoutAll: any;
}

const AccountTab: React.FC<Props> = ({
    error,
    updateProfile,
    updateAvatar,
    logoutAll,
    auth,
    auth: { user },
}) => {
    useEffect(() => {
        const { firstName: firstNameData, lastName: lastNameData } = user;
        setFormUpdateProfile({
            firstName: firstNameData || '',
            lastName: lastNameData || '',
            email: '',
        });
    }, [user]);

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    // eslint-disable-next-line
    const [isShowCrop, setIsShowCrop] = useState(false);
    const [preCroppedImage, setPreCroppedImage] = useState('');
    const [formUpdateProfile, setFormUpdateProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    useEffect(() => {
        if (preCroppedImage !== '') {
            setIsShowCrop(!isShowCrop);
        }
        // eslint-disable-next-line
    }, [preCroppedImage]);

    const onChangeTextField = (e: any) => {
        inputType(e, formUpdateProfile, setFormUpdateProfile);
    };
    const { email, firstName, lastName } = formUpdateProfile;
    const { email: emailData, firstName: firstNameData, lastName: lastNameData } = user;
    const examplePersona: IPersonaSharedProps = {
        imageUrl: user?.avatar?.url,
        imageInitials: user?.firstName && firstNameData?.[0] + firstNameData?.[1],
        text: `${firstNameData} ${lastNameData}`,
        secondaryText: 'Software Engineer',
        optionalText: 'Available at 4:00pm',
    };
    const onUpdateProfile = () => {
        updateProfile({ firstName, lastName, email });
    };
    const changeAvatar = (e: any) => {
        let file = e.target.files[0];
        const url: any = URL.createObjectURL(file);
        setPreCroppedImage(url);
    };
    const onLogoutAll = () => {
        logoutAll();
    };

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage: any = await getCroppedImg(preCroppedImage, croppedAreaPixels);
            console.log('donee', { croppedImage });
            var file = new File([croppedImage], 'asdasda.png', {
                type: 'image/png',
                lastModified: Date.now(),
            });
            // const url: any = URL.createObjectURL(file);
            // console.log(url);
            updateAvatar(file);
        } catch (e) {
            console.error(e);
        }
        setIsShowCrop(false);
        // eslint-disable-next-line
    }, [croppedAreaPixels]);

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    return (
        <>
            {isShowCrop ? (
                <div className="crop-container">
                    <Cropper
                        image={preCroppedImage}
                        crop={crop}
                        aspect={4 / 4}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                    />
                    <div className="controls">
                        <Button
                            type="button"
                            value="Crop Avatar"
                            onClick={showCroppedImage}
                        ></Button>
                    </div>
                </div>
            ) : null}

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

                            <Button
                                iconProps="CloudUpload"
                                style={{ position: 'relative', overflow: 'hidden' }}
                                value="Upload"
                                type="button"
                                onRenderChildren={
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
                                }
                            ></Button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <TextFieldGroup
                            label="First Name"
                            name="firstName"
                            type="text"
                            error={error}
                            onChange={onChangeTextField}
                            value={firstName}
                            placeholder={firstNameData}
                        />
                    </div>
                    <div className="col-md-6">
                        <TextFieldGroup
                            label="Last Name"
                            name="lastName"
                            type="text"
                            error={error}
                            onChange={onChangeTextField}
                            value={lastName}
                            placeholder={lastNameData}
                        />
                    </div>
                    <div className="col-md-6">
                        <TextFieldGroup
                            label="Email"
                            name="email"
                            type="email"
                            error={error}
                            onChange={onChangeTextField}
                            value={email}
                            placeholder={emailData}
                        />
                    </div>
                </div>
                <ButtonGroup>
                    <Button value="Save the Changes" type="button" onClick={onUpdateProfile} />
                    <Button
                        theme="plain"
                        value="Logout All Device"
                        type="button"
                        onClick={onLogoutAll}
                    />
                </ButtonGroup>
            </div>
        </>
    );
};

const mapStateToProps = (state: any) => ({
    auth: state.auth,
    error: state.error,
});

export default connect(mapStateToProps, { updateProfile, updateAvatar, logoutAll })(AccountTab);
