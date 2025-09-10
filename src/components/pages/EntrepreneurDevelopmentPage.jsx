import BusinessExperienceCard from "../ui/BusinessExperienceCard"

const EntrepreneurDevelopmentPage = ({ businesses }) => {
    return (
        <div className="page" id="portfolio">
            <div className="portfolio">
                {
                    false &&
                    <div className="title-section text-left text-sm-center">
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
        </div>
    )
}

export default EntrepreneurDevelopmentPage
