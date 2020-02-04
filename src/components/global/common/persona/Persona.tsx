import React, { useEffect } from 'react';
import { PersonaVerticalStyle, PersonaHorizontalStyle } from './styles/PersonaStyle';
import { PersonaSize, getNum, PersonaMode } from './enum/persona-size.enum';
import Text from '../text/Text';
import { TextType, TextSize } from '../text/enum/text.enum';
interface Props {
    imgURL: string;
    width: PersonaSize;
    mode: PersonaMode;
    textTitle?: string;
    textSubtitle?: string;
}

const Persona: React.FC<Props> = ({ imgURL, width, mode, textTitle, textSubtitle }) => {
    return (
        <>
            {mode === PersonaMode.VERTICAL ? (
                <PersonaVerticalStyle>
                    <img
                        src={imgURL}
                        style={{
                            width: `${getNum(width)}px`,
                            height: `${getNum(width)}px`,
                            borderRadius: '50%',
                        }}
                        alt=""
                    />
                    {textTitle ? (
                        <Text
                            type={TextType.HEADLINE}
                            text={textTitle}
                            textSize={TextSize.NORMAL}
                            margin={{ bottom: 10, top: 23 }}
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
                <PersonaHorizontalStyle>
                    <img
                        src={imgURL}
                        style={{
                            width: `${getNum(width)}px`,
                            height: `${getNum(width)}px`,
                            borderRadius: '50%',
                        }}
                        alt=""
                    />
                    <div className="text-group">
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
                    </div>
                </PersonaHorizontalStyle>
            )}
        </>
    );
};

export default Persona;
