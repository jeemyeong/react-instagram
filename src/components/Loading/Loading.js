import Spinner from 'react-spinkit';
import React from 'react';
import "./Loading.css";

const Loading = () => {
  return (
    <div className="Loading-wrapper">
        <Spinner spinnerName="folding-cube" noFadeIn />
    </div>
  );
};

export default Loading;
