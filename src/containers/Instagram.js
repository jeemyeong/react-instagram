import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PostList, Warning } from '../components';
import { getPosts, getPostAddedAction } from '../actions';

class Instagram extends Component {

    componentDidMount(){
      this.props.onGetPosts();
    }

    render() {
      return(
          <div>
            <PostList posts={this.props.postReducer.posts}/>
            <Warning visible={this.props.postReducer.warningVisibility} message="That post does not exist"/>
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
    onGetPostAddedAction: (post) => dispatch(getPostAddedAction(post))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Instagram);
