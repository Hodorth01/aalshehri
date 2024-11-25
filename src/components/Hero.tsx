import {Header} from "./../Header"
interface Props {
    src: string;
    header: string;
}
export const Hero = (props:Props)  =>{
    return(
        <>
            <header className="hero">
                <div className='hero-container'>
                    <img className="hero-image" src={props.src} alt={props.header} />
                    <div className='mask h-100'>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='' style={{fontSize:'2em'}}>
                                <p className="text-white" style={{fontSize:'2em'}}>{props.header}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Header/>

        </>
    )
}