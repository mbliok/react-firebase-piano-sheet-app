import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
      <div className="SignIn">
        <form onSubmit={this.handelSubmit}>
          <h2>Sign In</h2>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handelChange} />
          </div>
          <button>Sign up</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
