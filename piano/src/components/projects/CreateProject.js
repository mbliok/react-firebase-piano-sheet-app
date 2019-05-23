import React from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

class CreateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
  }
  handelChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handelSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProjectMethodName(this.state);
  };
  render() {
    return (
      <div className="CreateProject">
        <form onSubmit={this.handelSubmit}>
          <h2>Add new project</h2>
          <div className="input-field">
            <label htmlFor="title">Project title</label>
            <input type="text" id="title" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project content</label>
            <textarea id="content" onChange={this.handelChange} />
          </div>
          <button>Add</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createProjectMethodName: project => dispatch(createProject(project))
    // dispatch action creator-a which is imported at the top,
    // where is the async call and then dispatch the type'CREATE_PROJECT'
  };
};
export default connect(
  null,
  mapDispatchToProps
)(CreateProject);
