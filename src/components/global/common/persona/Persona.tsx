import React from 'react';
import { PersonaVerticalStyle } from './styles/PersonaStyle';
import { PersonaSize, getNum } from './enum/persona-size.enum';
import Text from '../text/Text';
import { TextType, TextSize } from '../text/enum/text.enum';
interface Props {
    imgURL: string;
    width: PersonaSize;
    mode: string;
    textTitle?: string;
    textSubtitle?: string;
}

const Persona: React.FC<Props> = ({ imgURL, width, mode, textTitle, textSubtitle }) => {
    return (
        <>
            {mode === 'vertical' ? (
                <PersonaVerticalStyle>
                    <img
                        src={imgURL}
                        style={{ width: `${getNum(width)}px`, borderRadius: '50%' }}
                        alt=""
                    />
                    {textTitle ? (
                        <Text
                            type={TextType.HEADLINE}
                            text={textTitle}
                            textSize={TextSize.NORMAL}
                        />
                    ) : null}

                    {textSubtitle ? (
                        <Text
                            type={TextType.PARAGRAPH}
                            text={textSubtitle}
                            textSize={TextSize.SMALL}
                        />
                    ) : null}
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
