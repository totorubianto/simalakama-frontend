import React from 'react';
import { PersonaVerticalStyle } from './styles/PersonaStyle';
import {} from './enum/PersonaSize';
interface Props {
    imgURL: string;
    width: number;
    mode: string;
}

const Persona: React.FC<Props> = ({ imgURL, width, mode }) => {
    return (
        <>
            {mode === 'vertical' ? (
                <PersonaVerticalStyle>
                    <img src={imgURL} style={{ width: `${width}px`, borderRadius: '50%' }} alt="" />
                </PersonaVerticalStyle>
            ) : (
                <div>
                    <img src={imgURL} style={{ width: `${width}px`, borderRadius: '50%' }} alt="" />
                </div>
            )}
        </>
    );
};

export default Persona;
