import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PostList, Warning, Login, Register, Loading } from '../components';
import { getPosts, getPostAddedAction, createPost } from '../actions/post';
import { authLoginRequesting, authLoginDetected, authLogoutDetected, authLogoutRequesting, authRegisterRequesting } from '../actions/auth';
import { Route, Link, Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { firebaseAuth } from '../database/database'

function PrivateRoute ({component: Component, authed, loading, path, ...rest}) {
  return (
    <Route
      path={path}
      render={
          function(props){
            if (loading===true){
              return <Loading/>
            }else if (authed===true){
              return <Component {...props} {...rest} authed={authed} />
            }else{
              return <Redirect to={{pathname: '/login', state: {from: props.location}}} />
            }
          }
        }
    />
  )
}

function PublicRoute ({component: Component, authed, path, ...rest}) {
  return (
    <Route
      path={path}
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
          this.props.onAuthLoginDetected(user)
        } else {
          this.props.onAuthLogoutDetected()
        }
      })
    }
    componentWillUnmount () {
      this.removeListener()
    }
    render() {
      return(
          <Container>
            <div>
              {this.props.authReducer.authed
                ? <div>
                    {this.props.authReducer.userInfo.name}님 환영합니다.
                    <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          this.props.onAuthLogoutRequesting()
                        }}
                        className="navbar-brand">[로그아웃]</button>
                  </div>
                : <span>
                    <Link to='/login'>Login</Link><br/>
                    <Link to='/register'>Register</Link><br/>
                  </span>}

                <PrivateRoute
                  path='/'
                  component={PostList}
                  authed={this.props.authReducer.authed}
                  userInfo={this.props.authReducer.userInfo}
                  posts={this.props.postReducer.posts}
                  onCreatePost={this.props.onCreatePost}
                  loading={this.props.authReducer.authedLoading}
                  />
                <PublicRoute
                  path='/login'
                  authed={this.props.authReducer.authed}
                  component={Login}
                  onAuthLogin={this.props.onAuthLogin}
                  />
                <PublicRoute
                  path='/register'
                  authed={this.props.authReducer.authed}
                  component={Register}
                  onAuthRegisterRequesting={this.props.onAuthRegisterRequesting}
                  />
              <Warning visible={this.props.postReducer.warningVisibility} message="Error"/>
              <Warning visible={this.props.authReducer.messageVisibility} message={this.props.authReducer.message}/>
            </div>
          </Container>

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
    onCreatePost: (post, userInfo) => dispatch(createPost(post, userInfo)),
    onAuthLogin: (email, pw) => dispatch(authLoginRequesting(email, pw)),
    onAuthLoginDetected: (user) => dispatch(authLoginDetected(user)),
    onAuthLogoutDetected: () => dispatch(authLogoutDetected()),
    onAuthLogoutRequesting: () => dispatch(authLogoutRequesting()),
    onAuthRegisterRequesting: (email, pw, name) => dispatch(authRegisterRequesting(email, pw, name))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Instagram);
