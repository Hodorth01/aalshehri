import { Parallax } from 'react-parallax';

interface Props{
    bgImage: string;
    strength: number;
    height: string;
    title: string;
    linkTitle: string;
    link: string;
}

export const Section = (props:Props)=>{
    return(
        <>
            <section>
                <Parallax
                    bgImage={props.bgImage}
                    strength={props.strength}
                    // style={{filter: "brightness(80%)"}}
                >
                    <div style={{height: props.height, backgroundSize: 'cover', backgroundPosition: "center",}}
                         className='section-title mx-3 d-flex flex-column justify-content-center align-items-start p-lg-5 p-3 '>
                        <h2 className="text-white ">{props.title}</h2>
                        <h3 className="section-link" >
                            <a href={props.link}>{props.linkTitle}</a>
                        </h3>
                    </div>
                </Parallax>
            </section>
        </>
    )
}