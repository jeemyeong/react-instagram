import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Login.css'
import { Button, Form, Label, Icon, Header } from 'semantic-ui-react'


class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        closing: false
      };

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onAuthLoginWithEmail(this.state.email, this.state.password)
    this.setState({
      email: '',
      password: '',
      closing: true
    })
  }

    render() {
        const { closing } = this.state;
        return(
          <div className={`animated ${closing?'fadeOut':'fadeIn'} fadeIn Login`} >
            <Form onSubmit={this.handleSubmit}>

                <Header as='h2' icon>
                  <Icon name='sign in' />
                  Sign In
                </Header>
              <Form.Field>
                <Label pointing="below">Email</Label>
                <input
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                  placeholder="Email"
                />
              </Form.Field>
              <Form.Field>
                <Label pointing="below">Password</Label>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                  placeholder="Password"
                />
              </Form.Field>
              <Button type='submit'>Login</Button>
              <Button onClick={this.props.onAuthLoginWithFacebook}>Facebook Login</Button>
              <Link to='/register'><Button>Register</Button></Link>
            </Form>
          </div>
        );
    }
}


export default Login;
