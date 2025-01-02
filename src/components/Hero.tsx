
interface Props {
    src: string;
    header: string;
    srcset: string;
    sizes: string;
}
const Hero = (props:Props)  =>{

    return(
        <>
            <header className="hero">
                <div className='hero-container'>
                    <img className="hero-image" src={props.src} alt={props.header} srcSet={props.srcset} sizes={props.sizes} />
                    <div className='mask h-100'>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div  data-aos="zoom-in" data-aos-delay={200}>
                                <p className="hero-text" >{props.header}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Hero;