import React from 'react';
import Card from '../../global/style/Card';
import Persona from '../../global/common/persona/Persona';
import { PersonaSize } from '../../global/common/persona/enum/persona-size.enum';

interface Props {}

const ConnectionCard: React.FC<Props> = () => {
    return (
        <div className="col-md-3">
            <Card margin="20,0,0,0" padding="20">
                <Persona
                    width={PersonaSize.BIG}
                    imgURL="https://cf.shopee.co.id/file/c3deb1bcc9a9ab2337d21fe007b661eb"
                    mode="vertical"
                    textTitle="Toto Rubianto"
                    textSubtitle="Siftware Engginer"
                />
            </Card>
        </div>
    );
};

export default ConnectionCard;
