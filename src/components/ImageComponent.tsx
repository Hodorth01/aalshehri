import {useState,useEffect} from "react";
import {Blurhash} from 'react-blurhash'
interface ImageProps{
    src: string;
    alt: string;
    hash: string;
    onClick: (event:React.MouseEvent) => void;
}

export const ImageComponent = ({ src, alt, hash, ...props }: ImageProps) => {
    // State to track whether the image has loaded
    const [isLoaded, setIsLoaded] = useState(false);

    // Effect to detect when the image is loaded
    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setIsLoaded(true); // Set state to true when image is loaded
        };
        img.src = src; // Trigger the image load
    }, [src]); // Re-run the effect if the `src` changes

    return (
        <>
            {/* Display the Blurhash until the image has loaded */}
            <div style={{ display: isLoaded ? "none" : "inline" }}>
                <Blurhash
                    hash={hash}
                    height={400}  // Set the desired height of the blurhash
                    width={300}   // Set the desired width of the blurhash
                    resolutionX={32} // X resolution for the blurhash (higher = better quality)
                    resolutionY={32} // Y resolution for the blurhash
                    punch={1}      // Intensity of the blurhash effect
                />
            </div>

            {/* Display the actual image after it has loaded */}
            <img
                style={{ display: !isLoaded ? "none" : "inline" }}
                className="my-2"
                src={src}
                alt={alt}
                {...props} // Spread the rest of the props to the image tag
                loading="lazy"  // Lazy load the image for performance optimization
            />
        </>
    );
};