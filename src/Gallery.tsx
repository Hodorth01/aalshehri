import {Hero} from "./components/Hero";
import {Category} from "./components/Category";
 const Gallery = () => {
    return (
        <>
            <div>
                <Hero
                    src="https://images.squarespace-cdn.com/content/v1/5ee8d403805d5556cb8200b7/8612f7da-c3b5-449b-a469-bd86560c9253/P9050080.jpg"
                    header={"Gallery"}
                />
            </div>
            <div className="container d-flex flex-wrap mw-100 m-0">
                <Category
                    src="https://images.squarespace-cdn.com/content/v1/5ee8d403805d5556cb8200b7/1647028830873-G9S1Y8THORSY3GJIH40W/DSC02238-Edit-3.jpg?format=1000w"
                    title="Artworks"
                    alt="Artworks"
                    path="/images/Artworks"
                />
                <Category
                    src ="https://images.squarespace-cdn.com/content/v1/5ee8d403805d5556cb8200b7/1647027416425-EYWFTE83V8J2QRT9GD8Y/untitled-8648-3.jpg?format=1000w"
                    title="Media Projects"
                    alt="Media Projects"
                    path="/images/MediaProjects"
                />

                <Category
                    src="https://images.squarespace-cdn.com/content/v1/5ee8d403805d5556cb8200b7/1647028100130-X31FEB5XZMALFTLYIBQQ/DSC05062-4.jpg?format=1000w"
                    title="Weddings"
                    alt="Weddings"
                    path="/images/Weddings"
                />

            </div>
        </>
    );
};
 export default Gallery