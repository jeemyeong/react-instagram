import React from 'react';
import Post from './../Post/Post'
import Write from './../Write/Write'
import "./PostList.css";

class PostList extends React.Component {

    render() {
      const postsArray = Object.keys(this.props.posts).map(k => this.props.posts[k])
        return(
          <div className="Post-list">
            <h2>Posts</h2>
            {this.props.authed}
            {postsArray && postsArray !== null ? (
              <div>
              {postsArray.map((post, index) => {
                return (
                    <Post contents={post.contents} key={index}>
                    </Post>
                );
              })}
              </div>
            ) : null}
            <Write onCreatePost={this.props.onCreatePost}/>
          </div>
        );
    }
}


export default PostList;
