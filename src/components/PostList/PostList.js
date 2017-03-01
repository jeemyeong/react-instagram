import React from 'react';
import Post from './../Post/Post'

const PostList = ({posts}) => {
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
          </div>
        </div>
    );
};

export default PostList;
