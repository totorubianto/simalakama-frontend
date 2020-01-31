import React from 'react';
import Card from '../../global/style/Card';
import Persona from '../../global/common/persona/Persona';
import { PersonaSize } from '../../global/common/persona/enum/PersonaSize';

interface Props {}

const ConnectionCard: React.FC<Props> = () => {
    return (
        <div className="col-md-3">
            <Card margin="20,0,0,0" padding="20">
                <Persona
                    width={PersonaSize.BIG}
                    imgURL="https://cf.shopee.co.id/file/c3deb1bcc9a9ab2337d21fe007b661eb"
                />
            </Card>
        </div>
    );
};

export default ConnectionCard;
