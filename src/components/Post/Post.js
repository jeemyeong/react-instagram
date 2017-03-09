import React from 'react';
import { Card } from 'semantic-ui-react'

const Post = (props) => {
  const userInfo = props.userInfo;
  return (
    <Card>
      <Card.Content
        header={userInfo.name!==undefined?userInfo.name:userInfo.email}
        description={props.contents}
      />
    </Card>
  );
};

export default Post;
