import React from 'react';
import Card from '../../global/style/Card';
import { IPersonaSharedProps, PersonaSize, PersonaPresence, Persona } from 'office-ui-fabric-react';

interface Props {}

const ConnectionCard: React.FC<Props> = () => {
    return (
        <div className="col-md-3">
            <Card margin="20,0,0,0" padding="20">
                <Persona
                    {...examplePersona}
                    size={PersonaSize.size72}
                    hidePersonaDetails={true}
                    imageAlt="Annie Lindqvist, status is dnd"
                />
            </Card>
        </div>
    );
};
const examplePersona: IPersonaSharedProps = {
    imageUrl: 'https://cf.shopee.co.id/file/c3deb1bcc9a9ab2337d21fe007b661eb',
    imageInitials: 'AL',
    text: 'Annie Lindqvist',
    secondaryText: 'Software Engineer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
};

export default ConnectionCard;
