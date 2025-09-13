import { useEffect, useState } from "react";
import PortfolioProjectDetails from "../ui/PortfolioProjectDetails";
import { useAppContext } from "../../context/GlobalAppContextProvider";
import { useHelpers } from "../../hooks/useHelpers";

const PortfolioPage = ({ portfolioData = [], sectionsRef, mobileActiveHeader }) => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showPortfolioProjectDetails, setShowPortfolioProjectDetails] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(-1);

  const PORTFOLIO = "portfolio";
  const { windowDimensions } = useAppContext();
  const { canShowMobileHeader } = useHelpers();

  const handleViewPortfolioProjectDetails = (e, index) => {
    e?.preventDefault();
    // e?.persist();
    if (typeof index === "number") {
      setActiveProjectIndex(index);
    }
  };

  useEffect(() => {
    setShowPortfolio(portfolioData.length > 0);
  }, [portfolioData]);

  useEffect(() => {
    setShowPortfolioProjectDetails(activeProjectIndex >= 0);
  }, [activeProjectIndex]);

  if (!showPortfolio) {
    return null;
  }

  return (
    <section
      ref={(el) => (sectionsRef.current[PORTFOLIO] = el)}
      data-name="portfolio"
      className="page"
      id="portfolio"
      style={{ marginBottom: windowDimensions.winWidth <= 577 ? "60px" : "0" }}
    >
      <div className="portfolio">
        {canShowMobileHeader(windowDimensions.winWidth, mobileActiveHeader, PORTFOLIO) && (
          <div className="title-section text-left text-sm-center text-xs-center">
            <h2>
              my <span>projects</span>
            </h2>
            <span className="title-bg">works</span>
          </div>
        )}

        <div className="main-content text-center">
          <div
            id="grid-gallery"
            className={`container grid-gallery ${showPortfolioProjectDetails ? "slideshow-open" : ""}`}
          >
            <div className="grid-wrap">
              <ul className="row grid gridlist">
                {portfolioData.map((portfolioProject, index) => (
                  <li className="card" style={{ backgroundColor: "#333" }} key={portfolioProject.id || index}>
                    <div className="card-body" title={portfolioProject.goal}>
                      <h5
                        className="card-title d-flex align-items-center justify-content-center text-uppercase"
                        style={{ minHeight: "120px", fontSize: "18px" }}
                      >
                        {portfolioProject.title}
                      </h5>
                      <div className="mb-5">
                        <h6
                          className="card-subtitle mb-2 text-left text-uppercase project-subtitle mb-3"
                          style={{ fontSize: "15px" }}
                        >
                          Project Objective
                        </h6>
                        <p className="card-text text-muted text-left text-truncate-3">
                          {portfolioProject.goal}
                        </p>
                      </div>
                      <button
                        onClick={(e) => handleViewPortfolioProjectDetails(e, index)}
                        className="button"
                        type="button"
                      >
                        <span className="button-text">View Project</span>
                        <span className="button-icon fa fa-arrow-right"></span>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <PortfolioProjectDetails
              portfolio={portfolioData}
              activeProjectIndex={activeProjectIndex}
              handleViewPortfolioProjectDetails={handleViewPortfolioProjectDetails}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
