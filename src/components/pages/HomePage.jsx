import profileImg from '../../assets/img/franklin-chinonso.png';
import mobileProfileImg from '../../assets/img/franklin-chinonso-mobile.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="page page--current" id="home">
            <div className="home">
                <div className="container-fluid main-container container-home p-0">
                    <div className="color-block d-none d-lg-block"></div>
                    <div className="row home-details-container align-items-center">
                        <img className="col-lg-4 d-none d-lg-block" src={profileImg} alt="" />
                        <div className="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-xs-center text-lg-left">
                            <div>
                                <img  src={mobileProfileImg} className="img-fluid main-img-mobile d-none d-sm-block d-lg-none mb-0" alt="my picture" />
                                <h1 className="text-uppercase poppins-font">
                                    Chinonso Franklin Okoroafor.
                                </h1>
                                <p className="text-uppercase poppins-font mb-4" style={{margin: '0px', lineHeight: '15px', fontSize: '12px'}}>
                                    Data & Business Intelligence Analyst <strong style={{padding: '0px 3px'}}>|</strong> Entrepreneur
                                </p>
                                <p className="open-sans-font">
                                    Transforming data into strategy: delivering predictive, NLP, and analytics solutions that drive measurable business impact.
                                </p>
                                <p className="open-sans-font">
                                    Bridging data, business, and culture — currently developing the African Food Marketplace app, launching in 2026.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage