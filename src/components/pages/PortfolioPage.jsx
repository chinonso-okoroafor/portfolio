import { useEffect, useState } from "react"
import PortfolioProjectDetails from "../ui/PortfolioProjectDetails"

const PortfolioPage = ({ portfolio }) => {

    const [showPortfolio, setShowPortfolio] = useState(false)
    const [showPortfolioProjectDetails, setShowPortfolioProjectDetails] = useState(false)
    const [activeProjectIndex, setActiveProjectIndex] = useState(-1)

    const handleViewPortfolioProjectDetails = (e, index) => {
        e?.preventDefault();
        if ((typeof index === 'number' && index >= 0) || (typeof index === 'number' && index === -1)) {
            setActiveProjectIndex(index)
        }
    }

    useEffect(() => {
        if (portfolio.length > 0) {
            setShowPortfolio(true);
        } else {
            setShowPortfolio(false);
        }
    }, [portfolio])

    useEffect(() => {
        if (activeProjectIndex >= 0) {
            setShowPortfolioProjectDetails(true);
        } else {
            setShowPortfolioProjectDetails(false);
        }
    }, [activeProjectIndex])

    if (!showPortfolio) {
        return false;
    }

    return (
        <div className="page" id="portfolio">
            <div className="portfolio">
                <div className="title-section text-left text-sm-center">
                    <h2>my <span>portfolio</span>
                    </h2>
                    <span className="title-bg">works</span>
                </div>
                <div className="main-content text-center">
                    <div id="grid-gallery" className={`container grid-gallery ${ showPortfolioProjectDetails ? 'slideshow-open' : '' }`}>
                        <div className="grid-wrap">
                            <ul className="row grid gridlist">
                                {
                                    portfolio.map((portfolioProject, index) => (
                                        <li className="card" style={{ backgroundColor: '#333'}} key={portfolioProject.id}>
                                            <div className="card-body" title={portfolioProject.goal}>
                                                <h5 className="card-title d-flex align-items-center justify-content-center text-uppercase" style={{ minHeight: '120px', fontSize: '18px' }}>{portfolioProject.title}</h5>
                                                <div className="mb-5">
                                                    <h6 className="card-subtitle mb-2 text-left text-uppercase project-subtitle mb-3 mt-3" style={{ fontSize: '15px' }}>Project Objective</h6>
                                                    <p className="card-text text-muted text-left text-truncate-3">
                                                        {portfolioProject.goal}
                                                    </p>
                                                </div>
                                                <a onClick={(e) => handleViewPortfolioProjectDetails(e, index)} className="button">
                                                    <span className="button-text">View Project</span>
                                                    <span className="button-icon fa fa-arrow-right"></span>
                                                </a>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <PortfolioProjectDetails 
                            portfolio={portfolio}
                            activeProjectIndex={activeProjectIndex}
                            handleViewPortfolioProjectDetails={handleViewPortfolioProjectDetails}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage