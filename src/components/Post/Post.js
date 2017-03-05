import React from 'react';

const Post = (props) => {
  const userInfo = props.userInfo;
  return (
    <div>{props.contents}
      {userInfo && userInfo !== null ? <b> - {userInfo.name}</b> : null}
    </div>
  );
};

export default Post;
