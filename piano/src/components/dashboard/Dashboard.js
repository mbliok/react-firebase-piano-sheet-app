import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wallpaper">
        <div>
          <ProjectList />
        </div>
        <div>
          <Notifications />
        </div>
      </div>
    );
  }
}

export default Dashboard;
