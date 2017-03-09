import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Login.css'


class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onAuthLoginWithEmail(this.email.value, this.pw.value)
  }

    render() {
        return(
          <div className="col-sm-6 col-sm-offset-3">
            <Link to='/register'>Register</Link><br/>
            <h1> Login </h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <button onClick={this.props.onAuthLoginWithFacebook}>Facebook Login</button>
          </div>
        );
    }
}


export default Login;
