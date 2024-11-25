import React,{useState,useEffect} from "react";
import {Blurhash} from 'react-blurhash'
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    hash: string;
}

export const ImageComponent = ({ src, alt, hash, ...props }:ImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(()=>{
        const img= new Image()
        img.onload=()=>{
            setIsLoaded(true);
        }
        img.src=src
    },[src])
    return (
        <>
            <div style={{display: isLoaded ? "none" : "inline"}}>
                <Blurhash
                    hash={hash}
                    height={400}
                    width={300}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            </div>


            <img
                style={{display: !isLoaded ? "none" : "inline"}}
                className="my-2"
                src={src}
                alt={alt}
                {...props}
                loading="lazy"
            />
        </>
    );
};
