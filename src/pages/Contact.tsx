import {Hero} from "./../components/Hero.tsx";
import {Icon} from "./../components/Icon.tsx";
import {ListItem} from "./../components/ListItem.tsx";

const Contact = ()=>{
    return (
        <>
            <Hero
                src="https://images.squarespace-cdn.com/content/v1/5ee8d403805d5556cb8200b7/dfa58795-d98c-4f0e-aa22-417cde8df132/PANO0001-5-Pano.jpg?format=2500w"
                header="Contact"
            />
            <div className="container pt-4 m-0 mt-4 mw-100">
                <div className="row gy-3 gy-md-4 gy-lg-0 d-flex ">
                    <div className=" col-md-6 col-lg-7 col-xl-7" data-aos="zoom-in" data-aos-delay="100">
                        <img className="img-fluid rounded w-100" loading="lazy" src="https://images.squarespace-cdn.com/content/v1/5ee8d403805d5556cb8200b7/1625338032215-JU586X5L2WKJ9EALVFXI/1575336190-946799-ams9021.jpg?format=2000w" alt="About 1"/>
                    </div>
                    <div className="col-md-5 col-lg-5 col-xl-5">
                        <div className="row justify-content-xl-center">
                            <div className="contact-wrapper">
                                <div className="direct-contact-container">
                                    <ul className="contact-list list-unstyled" data-aos="zoom-in" data-aos-delay="200">
                                        <ListItem icon="bi bi-geo-alt-fill" text="Abha, Saudi Arabia" href="#"/>
                                        <ListItem icon="bi bi-telephone-fill" text="+966500744769" href="tel:0500744769"/>
                                        <ListItem icon="bi bi-envelope-at-fill" text="sa88lomy@gmail.com" href="mailto:sa88lomy@gmail.com"/>
                                    </ul>
                                    <hr/>
                                    <ul className="social-media-list d-flex justify-content-center list-unstyled" data-aos="zoom-in" data-aos-delay="400">
                                        <Icon icon="bi bi-whatsapp" href="https://api.whatsapp.com/qr/M54HHXDV7O6WA1?autoload=1&app_absent=0 " />
                                        <Icon icon="bi bi-snapchat" href="https://www.snapchat.com/add/dom_tt19?share_id=tsHMPmb4svo&locale=en-GB" />
                                        <Icon icon="bi bi-linkedin" href="#" />
                                        <Icon icon="bi bi-instagram" href="https://www.instagram.com/doopr4/?igsh=aGp0bDRmaDA5cGc3" />
                                    </ul>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
        }
            export default Contact;