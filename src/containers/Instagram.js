import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PostList, Warning, Login } from '../components';
import { getPosts, getPostAddedAction, createPost } from '../actions';

class Instagram extends Component {

    componentDidMount(){
      this.props.onGetPosts();
    }

    render() {
      return(
          <div>
            <Login/>
            <PostList posts={this.props.postReducer.posts} onCreatePost={this.props.onCreatePost}/>
            <Warning visible={this.props.postReducer.warningVisibility} message="Error"/>
          </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    postReducer: state.postReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetPosts: () => dispatch(getPosts()),
    onGetPostAddedAction: (post) => dispatch(getPostAddedAction(post)),
    onCreatePost: (post) => dispatch(createPost(post))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Instagram);
