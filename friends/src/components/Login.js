import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


class Login extends React.Component {
    state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    login = e => {
      e.preventDefault();
      axiosWithAuth()
        .post('/login', this.state.credentials)
        .then(res => {
          localStorage.setItem('token', res.data.payload);
          // redirect to the apps main page?
          this.props.history.push('/protected');
        })
        .catch(err => console.log(err));
    };
  
    componentDidMount() {
      this.setState({ isLoading: false })
    }
  
    render() {
      return (
        <div>
          <form className="login" onSubmit={this.login}>
            <div className="username">Username</div>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <div className="password">Password</div>
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button className="login-button">Log in</button>
          </form>
        </div>
      );
    }
  }
  
  export default Login;