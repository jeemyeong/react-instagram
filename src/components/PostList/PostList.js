import React, { Component } from 'react';
import Post from './../Post/Post'
import Write from './../Write/Write'
import "./PostList.css";
import { Card, Divider } from 'semantic-ui-react'

class PostList extends Component {

    render() {
      const userInfo = this.props.userInfo;
      const postsArray = Object.keys(this.props.posts).map(k => this.props.posts[k])
        return(
          <div className={`animated fadeIn Post-list`} >
            {userInfo.name!==undefined?userInfo.name:userInfo.email}님 환영합니다.
            <button
                style={{border: 'none', background: 'transparent'}}
                onClick={() => {
                  this.props.onAuthLogoutRequesting()
                }}
                className="navbar-brand">[로그아웃]</button>
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
            <Divider />
            <Write onCreatePost={this.props.onCreatePost}
                   userInfo={this.props.userInfo}/>
          </div>
        );
    }
}


export default PostList;
