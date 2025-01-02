import Hero from "./../components/Hero";
import Icon from "./../components/Icon";
import ListItem from "./../components/ListItem";

const Contact = ()=>{
    return (
        <>
            <Hero
                src="../images/hero/PSX_20241008_172203-2000x1300.jpg"
                srcset="../images/hero/PSX_20241008_172203-750x500.jpg 550w, ../images/hero/PSX_20241008_172203-1000x650.jpg 1000w, ../images/hero/PSX_20241008_172203-1600x1050.jpg 1600w , ../images/hero/PSX_20241008_172203-2000x1300.jpg 2000w"
                sizes="(max-width: 576px) 750px,(max-width: 992px) 1000px,(max-width: 1200px) 1600px, 2000px "                header="Contact"
            />
            <div className="container pt-4 m-0 mt-4 mw-100">
                <div className="row gy-3 gy-md-4 gy-lg-0 d-flex ">
                    <div className=" col-md-7 col-lg-7 col-xl-6" data-aos="zoom-in" data-aos-delay="100">
                        <img
                            className="img-fluid rounded w-100"
                            loading="lazy"
                            src="../images/contact/DSC00215-1000x950.jpg"
                            srcSet="
                                    ../images/contact/DSC00215-600x570.jpg 600w,
                                    ../images/contact/DSC00215-800x760.jpg 800w,
                                    ../images/contact/DSC00215-1000x950.jpg 1000w,
                                    ../images/contact/DSC00215-2000x1900.jpg 2000w"
                            sizes="
                                    (max-width: 576px) 600px,
                                    (max-width: 768px) 800px,
                                    (max-width: 1200px) 1000px,
                                    2000px"
                            alt="contact"
                        />
                    </div>
                    <div className="col-md-5 col-lg-5 col-xl-6">
                        <div className="row justify-content-xl-center h-100">
                            <div className="contact-wrapper h-100 align-items-end">
                                <div className="direct-contact-container h-100 align-items-end" >
                                    <ul className="contact-list align-items-start list-unstyled" data-aos="zoom-in" data-aos-delay="200">
                                        <ListItem icon="bi bi-geo-alt-fill" text="Abha, Saudi Arabia" href="#"/>
                                        <ListItem icon="bi bi-telephone-fill" text="+966500744769" href="tel:0500744769"/>
                                        <ListItem icon="bi bi-envelope-at-fill" text="sa88lomy@gmail.com" href="mailto:sa88lomy@gmail.com"/>
                                    </ul>

                                    <hr />

                                    <ul className="social-media-list align-items-end d-flex justify-content-center  list-unstyled" data-aos="zoom-in" data-aos-delay="400">
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