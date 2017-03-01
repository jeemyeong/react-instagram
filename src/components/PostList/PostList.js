import React from 'react';
import Post from './../Post/Post'
import Write from './../Write/Write'

class PostList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      const posts = this.props.posts;
        return(
          <div>
            <div className="meeting-list">
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
          </div>
        );
    }
}


export default PostList;
