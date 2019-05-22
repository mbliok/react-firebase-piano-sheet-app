import React from 'react';

const ProjectDetails = props => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className="item-details">
      <div className="item-title">Project title {id}</div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
    </div>
  );
};

export default ProjectDetails;
