import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PostList, Warning, Login } from '../components';
import { getPosts, getPostAddedAction, createPost } from '../actions';
import { authLoginRequesting, authLoginFulfilled, authLogoutFulfilled, authLogoutRequesting } from '../actions/auth';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import { firebaseAuth } from '../database/database'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      render={(props) => authed === true
        ? <Component {...props} {...rest} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      render={(props) => authed === false
        ? <Component {...props} {...rest} />
      : <Redirect to='/' />}
    />
  )
}


class Instagram extends Component {
    componentDidMount () {
      this.props.onGetPosts();
      this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
        if (user) {
          this.props.onAuthLoginFulfilled(user)
        } else {
          this.props.onAuthLogoutFulfilled()
        }
      })
    }
    componentWillUnmount () {
      this.removeListener()
    }
    render() {
      return(
          <BrowserRouter>
            <div>
              {this.props.authReducer.authed
                ? <button
                    style={{border: 'none', background: 'transparent'}}
                    onClick={() => {
                      this.props.onAuthLogoutRequesting()
                    }}
                    className="navbar-brand">Logout</button>
                : <span>
                Login
                  </span>}
              <PrivateRoute
                path='/'
                component={PostList}
                authed={this.props.authReducer.authed}
                posts={this.props.postReducer.posts}
                onCreatePost={this.props.onCreatePost}
                />
              <PublicRoute
                path='/login'
                authed={this.props.authReducer.authed}
                component={Login}
                onAuthLogin={this.props.onAuthLogin}
                />
              <Warning visible={this.props.postReducer.warningVisibility} message="Error"/>
            </div>
          </BrowserRouter>
      );
    }
}

function mapStateToProps(state) {
  return {
    postReducer: state.postReducer,
    authReducer: state.authReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetPosts: () => dispatch(getPosts()),
    onGetPostAddedAction: (post) => dispatch(getPostAddedAction(post)),
    onCreatePost: (post) => dispatch(createPost(post)),
    onAuthLogin: (email, pw) => dispatch(authLoginRequesting(email, pw)),
    onAuthLoginFulfilled: (user) => dispatch(authLoginFulfilled(user)),
    onAuthLogoutFulfilled: () => dispatch(authLogoutFulfilled()),
    onAuthLogoutRequesting: () => dispatch(authLogoutRequesting())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Instagram);
