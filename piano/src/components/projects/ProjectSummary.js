import React from 'react';

const ProjectSummary = ({ project }) => {
  return (
    <section>
      <h3>{project.title}</h3>
      <p>{project.content}</p>
      <small>12.06.2019</small>
    </section>
  );
};

export default ProjectSummary;
