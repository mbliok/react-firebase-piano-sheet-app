import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = props => {
  console.log(props);
  const id = props.match.params.id;
  const { project } = props;
  if (project) {
    return (
      <div className="item-details">
        <div className="item-title">
          {project.title}
          {id}
        </div>
        <p>{project.content}</p>
        <span>
          Added by: {project.authorFirstName}
          {project.authorLastName}
        </span>
      </div>
    );
  } else {
    return <div>Loading project...</div>;
  }
};
// ownProps - we dont have accsess to props , so ownProps is the props of the component,
// before atach wathewer to it in return...
const mapStateToProps = (state, ownProps) => {
  // console.log('prj details component' + state);
  const id = ownProps.match.params.id; // present what we want to attach to our props #20 - this is the single project
  const projects = state.firestore.data.sheets; // projects
  const project = projects ? projects[id] : null; // find me the project of the projects with that id
  return {
    project: project // asign to property project and then return
    // retulr null if no projects
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'sheets' } // wich collection
  ])
)(ProjectDetails);
