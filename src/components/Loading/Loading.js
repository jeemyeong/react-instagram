import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import "./Loading.css";

const Loading = () => {
  return (
    <div className="Loading-wrapper">
      <Loader active inline='centered' />

    </div>
  );
};

export default Loading;
