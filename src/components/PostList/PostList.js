import React, { Component } from 'react';
import Post from './../Post/Post'
import Write from './../Write/Write'
import "./PostList.css";
import { Card } from 'semantic-ui-react'

class PostList extends Component {

    render() {
      const postsArray = Object.keys(this.props.posts).map(k => this.props.posts[k])
        return(
          <div className="Post-list">
            <h2>Posts</h2>
            {this.props.authed}
            {postsArray && postsArray !== null ? (
              <Card.Group>
                {postsArray.map((post, index) => {
                  return (
                      <Post contents={post.contents} key={index} userInfo={post.userInfo}>
                      </Post>
                  );
                })}
              </Card.Group>
            ) : null}
            <Write onCreatePost={this.props.onCreatePost}
                   userInfo={this.props.userInfo}/>
          </div>
        );
    }
}


export default PostList;
