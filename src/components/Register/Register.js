import React, { Component } from 'react';
import './Register.css'


class Register extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onAuthRegisterRequesting(this.email.value, this.pw.value, this.name.value)
  }

    render() {
        return(
          <div className="col-sm-6 col-sm-offset-3">
            <h1> Register </h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
              </div>
              <div className="form-group">
                <label>Name</label>
                <input type="name" className="form-control" placeholder="Name" ref={(name) => this.name = name} />
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
            </form>
          </div>
        );
    }
}


export default Register;
