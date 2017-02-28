import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

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
                  <ul>
                    {posts.map((post, index) => {
                      return (
                        <li key={index}>
                          {post.contents}
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </div>
            </div>
        );
    }
}

PostList.propTypes = propTypes;
PostList.defaultProps = defaultProps;

export default PostList;
