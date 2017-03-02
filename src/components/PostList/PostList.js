import React from 'react';
import Post from './../Post/Post'
import Write from './../Write/Write'
import "./PostList.css";

class PostList extends React.Component {

    render() {
      const posts = this.props.posts;
        return(
          <div className="Post-list">
            <h2>Posts</h2>
            {posts && posts !== null ? (
              <div>
              {posts.map((post, index) => {
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
