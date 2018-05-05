import React, { Component } from 'react';
import { Button } from '../../components/Button';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isAuthenticated: false
    }
  }

  onTextChange = (e) => {
    this.setState({ username: e.target.value });
  };

  onClickLogin = (e) => {
    console.log(this.state.username);
    this.setState({ isAuthenticated: true });
  };

  render() {
    if (this.state.isAuthenticated) {
      return <Redirect to={'/home'} />;
    }

    return (
      <div className="login">
        <div>
          <input type="text" placeholder="Your name" value={this.state.username} onChange={this.onTextChange} />
        </div>
        <div>
          <Button onClick={this.onClickLogin}>
            Login
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
