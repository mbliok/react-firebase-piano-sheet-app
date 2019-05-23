import React from 'react';

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
    console.log(this.state);
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

export default CreateProject;
