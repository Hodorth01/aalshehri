import { useState, useEffect, useRef } from "react";
import { Blurhash } from "react-blurhash";
import {inViewHook} from "../hooks/inViewHook";
interface ImageProps {
    src: string;
    srcSet: string;
    sizes:string;
    alt: string;
    hash: string;
    onClick: (event: React.MouseEvent) => void;
}

export const ImageComponent = ({ src, alt, hash,srcSet,sizes, ...props }: ImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setIsLoaded(true);
        };
        img.src = src;
    }, [src]);
    inViewHook(itemRef,"0px 0px")

    return (
        <div className="image-container" ref={itemRef}>
            {/* Display Blurhash until the image is loaded */}
            {!isLoaded && (
                <Blurhash
                    hash={hash}
                    height={200}
                    width={300}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            )}

            {/* Display the image with a zoom-in animation */}
            <img
                className={`my-2 image ${isLoaded ? "loaded" : ""}`} // Apply "loaded" class when loaded
                src={src}
                alt={alt}
                srcSet={srcSet}
                sizes={sizes}
                {...props}
                loading="lazy"
            />
        </div>
    );
};
