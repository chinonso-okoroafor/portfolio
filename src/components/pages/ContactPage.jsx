import mainImage from '../../assets/img/contact1.jpeg';
import supportImage1 from '../../assets/img/contact2.jpeg';
import supportImage2 from '../../assets/img/contact3.jpeg';
import { useAppContext } from '../../context/GlobalAppContextProvider';
import { useHelpers } from '../../hooks/useHelpers';

const ContactPage = ({ sectionsRef, mobileActiveHeader }) => {

    const CONTACT = 'contact-me'
    const { windowDimensions } = useAppContext();
    const { canShowMobileHeader } = useHelpers();

    return (
        <section ref={(el) => sectionsRef.current[CONTACT] = el } data-name="contact-me" className="page" id="contact" style={{ marginBottom: windowDimensions.winWidth <= 577  ? '60px' : '0' }}>
            <div className="contact">
                {
                    canShowMobileHeader(windowDimensions.winWidth, mobileActiveHeader, CONTACT) &&
                    <div className="title-section text-left text-sm-center text-xs-center">
                        <h2>
                            get in <span>touch</span>
                        </h2>
                        <span className="title-bg">contact</span>
                    </div>
                }
                <div className="main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-8 offset-md-2">
                                <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3 text-center">WORK WITH ME</h3>
                                <p className="open-sans-font mb-3 text-center">As an early-career data analyst, I’ve built projects that highlight my skills in data cleaning, visualization, and storytelling. I'm eager to contribute to meaningful work, collaborate on ideas, and keep expanding my expertise.</p>
                                <div className="row">
                                    <p className="open-sans-font custom-span-contact position-relative contact-links col-12 col-sm-6">
                                        <a 
                                            href="mailto:chinonso.okoroafor@outlook.com" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa fa-envelope-open position-absolute"></i>
                                            <span className="d-block">Email</span>
                                        </a>
                                    </p>
                                    <p className="open-sans-font custom-span-contact position-relative contact-links col-12 col-sm-6">
                                        <a 
                                            href="https://www.linkedin.com/in/chinonso-okoroafor-57086a284" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa fa-linkedin-square position-absolute"></i>
                                            <span className="d-block">LinkedIn</span>
                                        </a>
                                    </p>
                                    <p className="open-sans-font custom-span-contact position-relative contact-links col-12 col-sm-6">
                                        <a 
                                            href="https://github.com/chinonso-okoroafor/" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa fa-github position-absolute"></i>
                                            <span className="d-block">Github</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 offset-md-2">
                                <div className="row">
                                    <div className="col-md-12 mt-5">
                                        <div className="fancy-header">
                                            <img src={mainImage} className="img-responsive attachment-full" alt="" loading="lazy" style={{ borderRadius: '30px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactPage