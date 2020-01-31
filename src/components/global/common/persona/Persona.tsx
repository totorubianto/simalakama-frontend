import React from 'react';
import { PersonaVerticalStyle } from './styles/PersonaStyle';
import { PersonaSize, getNum } from './enum/PersonaSize';
interface Props {
    imgURL: string;
    width: PersonaSize;
    mode: string;
}

const Persona: React.FC<Props> = ({ imgURL, width, mode }) => {
    return (
        <>
            {mode === 'vertical' ? (
                <PersonaVerticalStyle>
                    <img
                        src={imgURL}
                        style={{ width: `${getNum(width)}px`, borderRadius: '50%' }}
                        alt=""
                    />
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
