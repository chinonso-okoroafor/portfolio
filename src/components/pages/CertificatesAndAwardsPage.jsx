import { useAppContext } from "../../context/GlobalAppContextProvider";
import { useHelpers } from "../../hooks/useHelpers";

const CertificatesAndAwardsPage = ({ accolades, sectionsRef, mobileActiveHeader }) => {

    const CERT_N_AWARD = 'certificates-n-awards'
    const { dateFormatter, capitalizeSentence, canShowMobileHeader } = useHelpers();
    const { windowDimensions } = useAppContext();

    return (
        <section ref={(el) => sectionsRef.current[CERT_N_AWARD] = el } data-name="certificates-n-awards" className="page" id="portfolio" style={{ marginBottom: windowDimensions.winWidth <= 577  ? '60px' : '0' }}>
            <div className="portfolio">
                {
                    canShowMobileHeader(windowDimensions.winWidth, mobileActiveHeader, CERT_N_AWARD) &&
                    <div className="title-section text-left text-sm-center text-xs-center">
                        <h2>my <span>awards</span>
                        </h2>
                        <span className="title-bg">accolades</span>
                    </div>
                }
                <div className="main-content text-center">
                    <div id="grid-gallery" className="container grid-gallery">
                        <div className="row">
                            {
                                accolades.map((accolade, index) => (
                                    <div className="col-12 col-md-6" key={index}>
                                        <div className="card badge-card bg-transparent shadow-sm">
                                            <div className="card-body">
                                                <div className="text-center mb-4">
                                                    <img
                                                        src={accolade.image}
                                                        alt=""
                                                        className="badge-image img-fluid"
                                                        style={{ maxWidth: '300px' }}
                                                    />
                                                </div>
                                                <hr className="my-4" />

                                                <div className="text-center">
                                                    <p className="mb-1 project-subtitle">
                                                        <strong>Issued on {dateFormatter.regularDate(accolade.issuedOn)} by</strong>
                                                    </p>
                                                    <h5 className="mb-4 text-uppercase">
                                                        <strong>{capitalizeSentence(accolade.issuedBy)}</strong>
                                                    </h5>

                                                    {/*  */}
                                                    <a  
                                                        className="button"
                                                        href={accolade.url} 
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <span className="button-text">Verify</span>
                                                        <span className="button-icon fa-solid fa-vial-circle-check"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CertificatesAndAwardsPage