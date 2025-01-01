import { Section } from './../components/Section';
const Home = ()=>{
    return(
        <>
            <div id='home'>
                <Section
                     title=' '
                     bgImage = 'https://images.squarespace-cdn.com/content/v1/53ac5f13e4b0c4e738760606/1686754178794-HM48O4ZDCSHV5WI5QWOH/2865-5KBNR.jpg'
                     strength={300}
                     height='100vh'
                     linkTitle=" "
                     link=" "
                />
                <Section
                     title='See Gallary'
                     bgImage={"https://images.squarespace-cdn.com/content/v1/53ac5f13e4b0c4e738760606/1647022275793-HR66D4W9LNFHVF47Q5B7/0D2A37443K.jpg?format=2500w"}
                     strength={500}
                     height='80vh'
                     linkTitle="SEE THE GALLARY →"
                     link="gallery"
                 />
                <Section
                    title='About Me'
                    bgImage={"https://i.ytimg.com/vi/V8vO_p4HZAI/maxresdefault.jpg"}
                    strength={500}
                    height='80vh'
                    linkTitle="SEE ABOUT ME →"
                    link="about"

                />
                <Section
                    title='Contact Me'
                    bgImage={"https://images.squarespace-cdn.com/content/v1/53ac5f13e4b0c4e738760606/1637874785554-0U0QA2FXTE09WZ01ROWM/GTHomepageweb.jpg?format=2500w"}
                    strength={500}
                    height='80vh'
                    linkTitle="CONTACT ME →"
                    link="contact"

                />
            </div>
        </>
    )
}
export default Home
