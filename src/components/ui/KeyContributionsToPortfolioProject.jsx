import React from 'react'
import ProjectActivitiesImpactsAndRecognitionsToPortfolioProject from './ProjectActivitiesImpactsAndRecognitionsToPortfolioProject';

const ServiceItem = ({ number, title, body }) => (
    <li className="col-12 col-md-6">
        <span className="count">{number}</span>
        <strong>{title}</strong>
        <p>{body}</p>
    </li>
);


const KeyContributionsToPortfolioProject = ({ keyContributions }) => {
    return (
        <ol className="row features-list">
            {keyContributions.map((item, index) => (

                Object.keys(item).includes("contributions") ? <div className="ml-5">
                    <h6 className="project-subtitle text-uppercase">TASK {index+1}: {item.title}</h6>
                    <ProjectActivitiesImpactsAndRecognitionsToPortfolioProject 
                        dataObject={item.contributions}
                    />
                </div> : <ServiceItem
                    number={index + 1}
                    title={item.title}
                    body={item.body}
                />

            ))}
        </ol>
    )
}

export default KeyContributionsToPortfolioProject