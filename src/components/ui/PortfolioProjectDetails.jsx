import React, { useEffect, useState } from 'react'

import prevImage from '../../assets/img/projects/navigation/left-arrow.png'
import nextImage from '../../assets/img/projects/navigation/right-arrow.png'
import closeImage from '../../assets/img/projects/navigation/close-button.png'
import KeyContributionsToPortfolioProject from './KeyContributionsToPortfolioProject'
import ProjectActivitiesImpactsAndRecognitionsToPortfolioProject from './ProjectActivitiesImpactsAndRecognitionsToPortfolioProject'

const PortfolioProjectDetails = ({ portfolio, activeProjectIndex, handleViewPortfolioProjectDetails }) => {

    const [activePortfolioProject, setActivePortfolioProject] = useState(null);

    useEffect(() => {

        if (portfolio.length > 0 && (activeProjectIndex >= 0)) {
            const proj = portfolio[activeProjectIndex];
            setActivePortfolioProject(proj)
        } else {
            setActivePortfolioProject(null)
        }

    }, [portfolio, activeProjectIndex])

    const handlePrevNextRequested = (param) => {
        const newIndex = activeProjectIndex + param;
        if (param < 0) {
            if (newIndex < 0) {
                handleViewPortfolioProjectDetails(null, (portfolio.length-1))
            } else {
                handleViewPortfolioProjectDetails(null, newIndex)
            }
        } else {
            if (newIndex >= portfolio.length) {
                handleViewPortfolioProjectDetails(null, (0))
            } else {
                handleViewPortfolioProjectDetails(null, newIndex)
            }
        }
    }

    const handleClosePortfolioProjectDetailsRequested = () => {
        handleViewPortfolioProjectDetails(null, -1)
    }

    return activePortfolioProject ? (
        <div className="slideshow">
            <ul className='animatable'>
                <li className={`${activePortfolioProject ? 'current show' : ''}`}>
                    <figure>
                        <figcaption>
                            <h3>{activePortfolioProject.title}</h3>
                            <div className="row open-sans-font">
                                {
                                    activePortfolioProject?.skillsAndTools &&
                                    <div className="col-12 mb-2 d-flex">
                                        <div style={{ minWidth: '135px' }}>
                                            <i className="fa fa-code pr-2"></i>
                                            <span className="project-label">Skills and Tools </span>: 
                                        </div>
                                        <div style={{ width: 'calc(100% - 135px)' }}>
                                            {
                                                activePortfolioProject.skillsAndTools.split(",").map((sksTls, index) => (
                                                    <span key={index} className="ft-wt-600 text-uppercase badge badge-success mx-1 m">{sksTls.trim()}</span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                }

                                {
                                    activePortfolioProject?.githubRepo?.url &&
                                    <div className="col-12 mb-2">
                                        <i className="fa fa-external-link pr-2"></i>
                                        <span className="project-label">Github Repo </span>: <span className="ft-wt-600 uppercase">
                                            <a 
                                                href={activePortfolioProject?.githubRepo?.url} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {activePortfolioProject?.githubRepo?.url}
                                            </a>
                                        </span>
                                    </div>
                                }
                                
                            </div>
                        </figcaption>
                        <div className='row mt-4'>
                            {
                                activePortfolioProject?.goal &&
                                <div className="col-12 mb-2">
                                    <h5 className="project-subtitle text-uppercase">Project Objective</h5>
                                    <p>{activePortfolioProject.goal}</p>
                                </div>
                            }

                            {
                                activePortfolioProject?.keyContributions?.length > 0 &&
                                <div className="col-12 mb-2">
                                    <h5 className="project-subtitle text-uppercase">Key Contributions</h5>
                                    <KeyContributionsToPortfolioProject 
                                        keyContributions={activePortfolioProject.keyContributions}
                                    />
                                </div>
                            }

                            {
                                activePortfolioProject?.projectActivities?.length > 0 &&
                                <div className="col-12 mb-2">
                                    <h5 className="project-subtitle text-uppercase">Project Activities</h5>
                                    <ProjectActivitiesImpactsAndRecognitionsToPortfolioProject 
                                        dataObject={activePortfolioProject.projectActivities}
                                    />
                                </div>
                            }

                            {
                                activePortfolioProject?.impactAndRecognition?.length > 0 &&
                                <div className="col-12 mb-2">
                                    <h5 className="project-subtitle text-uppercase">Impact & Recognition</h5>
                                    <ProjectActivitiesImpactsAndRecognitionsToPortfolioProject 
                                        dataObject={activePortfolioProject.impactAndRecognition}
                                    />
                                </div>
                            }
                        </div>
                    </figure>
                </li>
            </ul>
            <nav>
                <span onClick={() => handlePrevNextRequested(-1)} className="icon nav-prev">
                    <img src={prevImage} alt="previous" />
                </span>
                <span onClick={() => handlePrevNextRequested(1)} className="icon nav-next">
                    <img src={nextImage} alt="next" />
                </span>
                <span onClick={handleClosePortfolioProjectDetailsRequested} className="nav-close">
                    <img src={closeImage} alt="close" />
                </span>
            </nav>
        </div>
    ) : false
}

export default PortfolioProjectDetails