import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
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
      <div className="SignUp">
        <form onSubmit={this.handelSubmit}>
          <h2>Sign Up</h2>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">Fist Name</label>
            <input type="text" id="firstName" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handelChange} />
          </div>

          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
