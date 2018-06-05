import React from 'react';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };

  submit = e => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api-token-auth/', {
      method: 'POST',
      headers: new Headers(),
      body: JSON.stringify({ username: this.state.username, password: this.state.password }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(res => console.error('error logging in', res));
  };

  change = e => {
    e.preventDefault();
    this.setState({ [e.name]: e.value });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.submit}>
          <input type="text" placeholder="username" name="username" onChange={this.change} />
          <input type="password" placeholder="password" name="password" onChange={this.change} />
          <button>Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
