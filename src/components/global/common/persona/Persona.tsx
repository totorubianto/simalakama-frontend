import React from 'react';

interface Props {
    imgURL: string;
    width: number;
}

const Persona: React.FC<Props> = ({ imgURL, width }) => {
    return (
        <div>
            <img src={imgURL} style={{ width: `${width}px`, borderRadius: '50%' }} alt="" />
        </div>
    );
};

export default Persona;
