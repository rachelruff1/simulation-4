import React, { Component } from "react";
import { connect } from "react-redux";
import { handleLogin, handleRegister } from "../../ducks/reducer";
import "./AuthView.css";
import logo from "./sim-logo.svg";
import {Link} from 'react-router-dom';

class AuthView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }
  updateUsername(e) {
    this.setState({
      username: e
    });
  }
  updatePassword(e) {
    this.setState({
      password: e
    });
  }
  render() {
    const { username, password } = this.state;
    const { handleLogin, handleRegister } = this.props;
    console.log(this.state);
    return (
      <div className="auth-container">
        <div className="auth-overlay">
          <div className="auth-logo-container">
            <img src={logo} alt="logo" />
            <h3 id="welcome">Welcome To</h3>
            <h1 id="goodEats">Good Eats</h1>
          </div>
          <div className="auth-login-container">
            <div className="username-container">
              <h3>Username:</h3>
              <input onChange={e => this.updateUsername(e.target.value)} />
            </div>
            <div className="password-container">
              <h3>Password:</h3>
              <input
                type="password"
                onChange={e => this.updatePassword(e.target.value)}
              />
            </div>
            <br />
            <Link to='/menu' ><button onClick={() => handleLogin(username, password).then()}>
              Login
            </button></Link>
            <Link to='/menu' ><button onClick={() => handleRegister(username, password)}>
              Register
            </button></Link>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => state;

export default connect(mapStateToProps, { handleLogin, handleRegister })(
  AuthView
);
