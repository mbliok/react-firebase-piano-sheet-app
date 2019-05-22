import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
  return (
    <div className="item-list">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
};

export default ProjectList;
