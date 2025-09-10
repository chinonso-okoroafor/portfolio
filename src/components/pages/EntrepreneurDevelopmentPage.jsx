import { useAppContext } from "../../context/GlobalAppContextProvider";
import { useHelpers } from "../../hooks/useHelpers";
import BusinessExperienceCard from "../ui/BusinessExperienceCard"

const EntrepreneurDevelopmentPage = ({ businesses, sectionsRef, mobileActiveHeader }) => {

    const ENTREPRENEURSHIP = 'entrepreneurship'
    const { windowDimensions } = useAppContext();
    const { canShowMobileHeader } = useHelpers();

    return (
        <section ref={(el) => sectionsRef.current[ENTREPRENEURSHIP] = el } data-name="entrepreneurship" className="page" id="about" style={{ marginBottom: windowDimensions.winWidth <= 577  ? '60px' : '0' }}>
            <div className="portfolio">
                {
                    canShowMobileHeader(windowDimensions.winWidth, mobileActiveHeader, ENTREPRENEURSHIP) &&
                    <div className="title-section text-left text-sm-center text-xs-center">
                        <h2>my <span>businesses</span>
                        </h2>
                        <span className="title-bg">entrepreneurship</span>
                    </div>
                }
                <div className="main-content">
                    <div id="grid-gallery" className="container grid-gallery">
                        <div className="row">
                            {
                                businesses.map((business, index) => (
                                    <BusinessExperienceCard
                                        key={index}
                                        business={business}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EntrepreneurDevelopmentPage
