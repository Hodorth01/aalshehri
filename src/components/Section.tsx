import { Parallax } from "react-parallax";
import { useState, useEffect } from "react";

interface BgImageProps {
    small?: string;
    medium?: string;
    large?: string;
    default: string; // Default must always be provided
}

interface Props {
    bgImage: BgImageProps; // Allow dynamic selection
    strength: number;
    height: string;
    title: string;
    linkTitle: string;
    link: string;
}

const Section = (props: Props) => {
    const [currentBgImage, setCurrentBgImage] = useState<string>(
        typeof props.bgImage === "string" ? props.bgImage : props.bgImage.default
    );

    useEffect(() => {
        if (typeof props.bgImage === "object") {
            const updateBgImage = () => {
                const width = window.innerWidth;
                if (width <= 576) setCurrentBgImage(props.bgImage.small || props.bgImage.default);
                else if (width <= 992) setCurrentBgImage(props.bgImage.medium || props.bgImage.default);
                else if (width <= 1200) setCurrentBgImage(props.bgImage.large || props.bgImage.default);
                else setCurrentBgImage(props.bgImage.default);
            };

            updateBgImage(); // Set on initial render
            window.addEventListener("resize", updateBgImage); // Update on resize

            return () => window.removeEventListener("resize", updateBgImage);
        }
    }, [props.bgImage]);

    return (
        <section>
            <Parallax bgImage={currentBgImage} strength={props.strength}>
                <div
                    style={{
                        height: props.height,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        background: "rgba(0, 0, 0, 0.15)", // Dark overlay
                    }}
                    className="section-title d-flex flex-column justify-content-center align-items-start p-lg-5 p-3"
                >
                    <h2 className="text-white">{props.title}</h2>
                    <h3 className="section-link">
                        <a href={props.link}>{props.linkTitle}</a>
                    </h3>
                </div>
            </Parallax>
        </section>
    );
};
export default Section;