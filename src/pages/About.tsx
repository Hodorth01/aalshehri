import Hero from "../components/Hero";

const About = ()=>{
    return (
        <>
            <Hero
                src="../images/hero/PSX_20241006_233957-750x500.jpg"
                srcset="../images/hero/PSX_20241006_233957-750x500.jpg 550w, ../images/hero/PSX_20241006_233957-1000x650.jpg 1000w, ../images/hero/PSX_20241006_233957-1600x1000.jpg 1600w , ../images/hero/PSX_20241006_233957-2000x1300.jpg 2000w"
                sizes="(max-width: 576px) 750px,(max-width: 992px) 1000px,(max-width: 1200px) 1600px, 2000px "
                header="About"
                />
                <div className="container pt-4 m-0 mt-4 mw-100">
                    <div className="row gy-3 gy-md-4 gy-lg-0 ">
                        <div className="col-12 col-md-7 col-lg-7 col-xl-6">
                            <img className="img-fluid rounded" loading="lazy"
                                 src="../images/about/DSC00226-800x533.jpg"
                                 srcSet="
                                     ../images/about/DSC00226-500x333.jpg 500w,
                                    ../images/about/DSC00226-600x400.jpg 600w,
                                    ../images/about/DSC00226-800x533.jpg 800w"
                                 sizes="
                                        (max-width: 576px) 500px,
                                        (max-width: 768px) 600px,
                                        (max-width: 992px) 800px,
                                        100vw"
                                 alt="About 1"
                                 data-aos="zoom-in" data-aos-delay="200"/>
                        </div>
                        <div className="col-12 col-md-5 col-lg-5 col-xl-6 about-text">
                            <div className="row justify-content-xl-center">
                                <div className="col-12 col-xl-11 mt-lg-5 ">
                                    <h2 className="mb-3" data-aos="zoom-in" data-aos-delay="200">About me</h2>
                                    <p className="primary mb-3" data-aos="zoom-in" data-aos-delay="300">I'm Abdulrahman, a photographer and documentarian in Asir through my lens</p>
                                    <p className="secondary mb-4 text-secondary" data-aos="zoom-in" data-aos-delay="400">A 22-year-old photographer from Asir, Saudi Arabia, passionate about capturing the rich cultural heritage and stunning landscapes of my region through my lens</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default About;