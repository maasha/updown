import React from 'react';
import PropTypes from 'prop-types';

const Download = (props) => {
  return (
    <div className="download">
      <h2>download</h2>
      <p>File to download: {props.file}</p>
    </div>
  );
};

Download.propTypes = {
  file: PropTypes.string,
};

export default Download;
