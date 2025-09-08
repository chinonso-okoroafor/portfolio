import React from "react";

const renderActivityImpactOrRecognition = (data, index) => {
  if (typeof data === "string") {
    return <li key={index}>{data}</li>;
  }
  return (
    <li key={index}>
      <p>{data.leadingText}</p>
      <ol>
        {(data.collections || []).map((item, i) => (
          <li key={`${index}-${i}`}>{item}</li>
        ))}
      </ol>
    </li>
  );
};

const ProjectActivitiesImpactsAndRecognitionsToPortfolioProject = ({ dataObject }) => {

  if (!dataObject.length) {
    return <p>No activities found.</p>;
  }

  return (
    <div>
      <ol>{dataObject.map(renderActivityImpactOrRecognition)}</ol>
    </div>
  );
};

export default ProjectActivitiesImpactsAndRecognitionsToPortfolioProject;
