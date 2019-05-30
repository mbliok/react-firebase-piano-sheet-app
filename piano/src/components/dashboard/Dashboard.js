import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'; // to use connect and firestore together inside this component

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    const { projects } = this.props;

    return (
      <div className="wallpaper">
        <div>
          <ProjectList projects={projects} />
        </div>
        <div>
          <Notifications />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    // projects: state.project.projects // pass props to projects from state.project reducer as (propurty project ) initial data(dumy projects)
    projects: state.firestore.ordered.sheets // #19
  };
};
// export default connect(mapStateToProps)(Dashboard);
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'sheets' } // to say wich collection we want to use
  ])
)(Dashboard);
