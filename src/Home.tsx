import { Section } from './components/Section';
const Home = ()=>{
    return(
        <>
            <div id='home'>
                <Section
                     title=' '
                     bgImage = 'https://images.squarespace-cdn.com/content/v1/53ac5f13e4b0c4e738760606/1686754178794-HM48O4ZDCSHV5WI5QWOH/2865-5KBNR.jpg'
                     strength={100}
                     height='100vh'
                />
                <Section
                     title='Gallary'
                     bgImage={"https://images.squarespace-cdn.com/content/v1/53ac5f13e4b0c4e738760606/1647022275793-HR66D4W9LNFHVF47Q5B7/0D2A37443K.jpg?format=2500w"}
                     strength={200}
                     height='75vh'
                 />
                <Section
                    title='About'
                    bgImage={"https://i.ytimg.com/vi/V8vO_p4HZAI/maxresdefault.jpg"}
                    strength={200}
                    height='75vh'
                />
                <Section
                    title='Contact'
                    bgImage={"https://images.squarespace-cdn.com/content/v1/53ac5f13e4b0c4e738760606/1637874785554-0U0QA2FXTE09WZ01ROWM/GTHomepageweb.jpg?format=2500w"}
                    strength={200}
                    height='75vh'
                />
            </div>
        </>
    )
}
export default Home
