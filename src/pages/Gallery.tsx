import Hero from "./../components/Hero";
import Category from "./../components/Category";

 const Gallery = () => {
    return (
        <>

            <div>
                <Hero
                    src="../images/hero/categories-2000x1000.jpg"
                    header="Gallery"
                    srcset="../images/hero/categories-750x370.jpg 550w, ../images/hero/categories-1000x500.jpg 1000w, ../images/hero/categories-1600x800.jpg 1600w , ../images/hero/categories-2000x1000.jpg 2000w"
                    sizes="(max-width: 576px) 750px,(max-width: 992px) 1000px,(max-width: 1200px) 1600px, 2000px "
                />
            </div>
            <div className="container d-flex flex-wrap mw-100 m-0">
                <Category
                    src="../images/Categories/PSX_20240525_025812-500x282.jpg"
                    title="Artworks"
                    alt="Artworks"
                    path="/images/Artworks"
                />
                <Category
                    src="../images/Categories/DSC04425UYFRT-500X333.jpg"
                    title="Media"
                    alt="Media"
                    path="/images/Media"
                />
                <Category
                    src="../images/Categories/DSC04399-500X333.jpg"
                    title="Weddings"
                    alt="Weddings"
                    path="/images/Weddings"
                />

            </div>
        </>
    );
 };
export default Gallery