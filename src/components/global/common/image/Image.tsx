import React, { useState } from 'react';

interface Props {
    src: string;
    fallback: string;
    alt: string;
    style?: any;
}

const Image = (props: Props) => {
    const useFallbackImg = (img: any, fallback: any) => {
        const [src, setImg] = useState(img);
        function onError(e: any) {
            console.log('Missing img', img, e);
            setImg(fallback);
        }
        return { src, onError };
    };

    const Image = ({ src, fallback, alt, ...rest }: any) => {
        const imgProps = useFallbackImg(src, fallback);
        return <img {...imgProps} alt={alt} {...rest} />;
    };
    return (
        <Image
            key="someUrl"
            src={props.src ? props.src : props.fallback}
            fallback={props.fallback}
            alt={props.alt}
            style={props.style}
        ></Image>
    );
};

export default Image;
