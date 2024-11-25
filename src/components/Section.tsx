import { Parallax } from 'react-parallax';

interface Props{
    bgImage: string;
    strength: number;
    height: string;
    title: string;
}

export const Section = (props:Props)=>{
    return(
        <>
            <section>
                <Parallax
                    bgImage={props.bgImage}
                    strength={props.strength}
                    style={{filter: "brightness(80%)"}}>
                    <div style={{height: props.height, backgroundSize: 'cover', backgroundPosition: "center",}}
                         className='section-title mx-3'>
                        <h2 className="text-white">{props.title}</h2>
                    </div>
                </Parallax>
            </section>
        </>
    )
}