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
                            <div className="col-12 col-lg-4">
                                <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">Don't be shy !</h3>
                                <p className="open-sans-font mb-3">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                                <p className="open-sans-font custom-span-contact position-relative contact-links">
                                    <a 
                                        href="mailto:chinonso.okoroafor@outlook.com" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa fa-envelope-open position-absolute"></i>
                                        <span className="d-block">mail me</span>chinonso.okoroafor@outlook.com
                                    </a>
                                </p>
                                <p className="open-sans-font custom-span-contact position-relative contact-links">
                                    <a 
                                        href="https://www.linkedin.com/in/chinonso-okoroafor-57086a284" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa fa-linkedin-square position-absolute"></i>
                                        <span className="d-block">LinkedIn Profile</span>https://www.linkedin.com/in/chinonso-okoroafor-57086a284
                                    </a>
                                </p>
                                <p className="open-sans-font custom-span-contact position-relative contact-links">
                                    <a 
                                        href="https://www.facebook.com/" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa fa-facebook-square position-absolute"></i>
                                        <span className="d-block">Facebook Profile</span>@chinonso-okoroafor
                                    </a>
                                </p>
                                <p className="open-sans-font custom-span-contact position-relative contact-links">
                                    <a 
                                        href="https://www.x.com/" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-brands fa-x-twitter position-absolute"></i>
                                        <span className="d-block">X Profile</span>@chinonso-okoroafor
                                    </a>
                                </p>
                            </div>
                            <div className="col-12 col-lg-8">
                                <div className="row">
                                    <div className="col-md-8 no-margin-no-padding">
                                        <div className="fancy-header">
                                            <img width="956" height="700" src={mainImage} className="img-responsive attachment-full" alt="" loading="lazy"  sizes="(max-width: 956px) 100vw, 956px" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 no-margin-no-padding">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 no-margin-no-padding">
                                                <div className="fancy-nav"> 
                                                    <img width={windowDimensions.winWidth <= 767 ? 956 : 482} height={windowDimensions.winWidth <= 767 ? 700 : 350} src={supportImage1} className="img-responsive attachment-full" alt="" loading="lazy"  sizes="(max-width: 482px) 100vw, 482px" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12 no-margin-no-padding">
                                                <div className="fancy-nav"> 
                                                    <img width={windowDimensions.winWidth <= 767 ? 956 : 482} height={windowDimensions.winWidth <= 767 ? 700 : 350} src={supportImage2} className="img-responsive attachment-full" alt="" loading="lazy" sizes="(max-width: 482px) 100vw, 482px" />
                                                </div>
                                            </div>
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