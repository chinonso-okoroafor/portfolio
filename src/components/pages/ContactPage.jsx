import mainImage from '../../assets/img/contact1.jpeg';
import supportImage1 from '../../assets/img/contact2.jpeg';
import supportImage2 from '../../assets/img/contact3.jpeg';
import { useAppContext } from '../../context/GlobalAppContextProvider';

const ContactPage = () => {

    const { windowDimensions } = useAppContext();

    return (
        <div className="page" id="contact">
            <div className="contact">
                <div className="title-section text-left text-sm-center">
                    <h2>
                        get in <span>touch</span>
                    </h2>
                    <span className="title-bg">contact</span>
                </div>
                <div className="main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">Don't be shy !</h3>
                                <p className="open-sans-font mb-3">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                                <p className="open-sans-font custom-span-contact position-relative">
                                    <i className="fa fa-envelope-open position-absolute"></i>
                                    <span className="d-block">mail me</span>chinonso.okoroafor@outlook.com
                                </p>
                                <p className="open-sans-font custom-span-contact position-relative">
                                    <i className="fa fa-linkedin-square position-absolute"></i>
                                    <span className="d-block">LinkedIn Profile</span>https://www.linkedin.com/in/chinonso-okoroafor-57086a284
                                </p>
                                <p className="open-sans-font custom-span-contact position-relative">
                                    <i className="fa fa-facebook-square position-absolute"></i>
                                    <span className="d-block">Facebook Profile</span>@chinonso-okoroafor
                                </p>
                                <p className="open-sans-font custom-span-contact position-relative">
                                    <i className="fa-brands fa-x-twitter position-absolute"></i>
                                    <span className="d-block">X Profile</span>@chinonso-okoroafor
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
        </div>
    )
}

export default ContactPage