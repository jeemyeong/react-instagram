import React, { Component, PropTypes } from 'react';
import './Login.css'

const propTypes = {

};

const defaultProps = {

};

class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="Login">
              Login
            </div>
        );
    }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
