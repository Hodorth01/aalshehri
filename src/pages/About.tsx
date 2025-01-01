import {Hero} from "../components/Hero.tsx";

const About = ()=>{
    return (
        <>
            <Hero
                src="https://images.squarespace-cdn.com/content/v1/5ee8d403805d5556cb8200b7/bfcb1852-1de1-424b-9775-b8416eb4d67b/nate_jacket.jpg?format=2500w"
                header="About"
                />
                <div className="container pt-4 m-0 mt-4 mw-100">
                    <div className="row gy-3 gy-md-4 gy-lg-0 ">
                        <div className="col-12 col-md-7 col-lg-7 col-xl-6">
                            <img className="img-fluid rounded" loading="lazy" src="http://aalshehri.space/images/photo_2024-06-28_21-36-19.jpg" alt="About 1" data-aos="zoom-in" data-aos-delay="200"/>
                        </div>
                        <div className="col-12 col-md-5 col-lg-5 col-xl-6">
                            <div className="row justify-content-xl-center">
                                <div className="col-12 col-xl-11  pt-5 mt-5">
                                    <h2 className="mb-3" data-aos="zoom-in" data-aos-delay="200">About me</h2>
                                    <p className="lead fs-4 text-secondary mb-3" data-aos="zoom-in" data-aos-delay="300">I'm Abdulrahman, a photographer and documentarian in Asir through my lens</p>
                                    <p className="mb-4" data-aos="zoom-in" data-aos-delay="400">We are a fast-growing company, but we have never lost sight of our core values. We believe in collaboration, innovation, and customer satisfaction. We are always looking for new ways to improve our products and services.</p>
                                    <p data-aos="zoom-in" data-aos-delay="500">Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default About;