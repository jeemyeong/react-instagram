import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PostList, Warning } from '../components';
import { getPosts } from '../actions';

class Instagram extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
      this.props.onGetPosts();
    }

    render() {
      console.log(this.props.postReducer)
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Instagram);
