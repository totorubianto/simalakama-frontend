import React from 'react';
import { PersonaVerticalStyle, PersonaHorizontalStyle } from './styles/PersonaStyle';
import { PersonaSize, getNum, PersonaMode } from './enum/persona-size.enum';
import Text from '../text/Text';
import { TextType, TextSize } from '../text/enum/text.enum';
import { Link } from 'react-router-dom';
import Image from '../image/Image';
interface Props {
    imgURL: string;
    width: PersonaSize;
    mode: PersonaMode;
    textTitle?: string;
    textSubtitle?: string;
    to: string;
}

const Persona: React.FC<Props> = ({ imgURL, width, mode, textTitle, textSubtitle, to }) => {
    return (
        <>
            {mode === PersonaMode.VERTICAL ? (
                <PersonaVerticalStyle>
                    <Image
                        style={{
                            width: `${getNum(width)}px`,
                            height: `${getNum(width)}px`,
                            borderRadius: '50%',
                        }}
                        key="someUrl"
                        src={imgURL}
                        fallback="assets/images/avatar_default.png"
                        alt={imgURL}
                    ></Image>

                    {textTitle ? (
                        <Link to={to}>
                            <Text
                                type={TextType.HEADLINE}
                                text={textTitle}
                                textSize={TextSize.NORMAL}
                                margin={{ bottom: 5, top: 20 }}
                            />
                        </Link>
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
                        onError={(e: any) => {
                            e.target.onerror = null;
                            e.target.src = 'assets/images/avatar_default.png';
                        }}
                        style={{
                            width: `${getNum(width)}px`,
                            height: `${getNum(width)}px`,
                            borderRadius: '50%',
                        }}
                        alt=""
                    />
                    <div className="text-group">
                        {textTitle ? (
                            <Link to={to}>
                                <Text
                                    type={TextType.HEADLINE}
                                    text={textTitle}
                                    textSize={TextSize.NORMAL}
                                />
                            </Link>
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
