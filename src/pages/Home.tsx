import Section  from './../components/Section';
const Home = ()=>{
    return(
        <>
            <div id='home'>
                <Section
                     title=' '
                     bgImage={{
                         small:"../images/home/DSC00201-1600x1067.jpg",
                         medium: "../images/home/DSC00201-1600x1067.jpg",
                         large: "../images/home/DSC00201-1600x1067.jpg",
                         default: "../images/home/DSC00201-2000x1333.jpg",
                     }}
                     strength={300}
                     height='100vh'
                     linkTitle=" "
                     link=" "
                />
                <Section
                     title='Gallery'
                     bgImage={{
                         small:"../images/home/DSC00219-1600x1200.jpg",
                         medium: "../images/home/DSC00219-1600x1200.jpg",
                         large: "../images/home/DSC00219-1600x1067.jpg",
                         default: "../images/home/DSC00219-2000x1330.jpg",
                     }}
                     strength={500}
                     height='80vh'
                     linkTitle="SEE THE GALLERY →"
                     link="gallery"
                 />
                <Section
                    title='About Me'
                    bgImage={{
                        small:"../images/home/PSX_20241006_233957-1000x650.jpg",
                        medium: "../images/home/PSX_20241006_233957-1000x650.jpg",
                        large: "../images/home/PSX_20241006_233957-1600x1000.jpg",
                        default: "../images/home/PSX_20241006_233957-2000x1300.jpg",
                    }}
                    strength={500}
                    height='80vh'
                    linkTitle="SEE ABOUT ME →"
                    link="about"

                />
                <Section
                    title='Contact Me'
                    bgImage={{
                        small:"../images/home/PSX_20241008_172203-1000x650.jpg",
                        medium: "../images/home/PSX_20241008_172203-1000x650.jpg",
                        large: "../images/home/PSX_20241008_172203-1600x1050.jpg",
                        default: "../images/home/PSX_20241008_172203-2000x1300.jpg",
                    }}
                    strength={500}
                    height='80vh'
                    linkTitle="SEE CONTACT ME →"
                    link="contact"

                />
            </div>
        </>
    )
}
export default Home
