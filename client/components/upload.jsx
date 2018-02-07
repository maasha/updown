import React from 'react';
import PropTypes from 'prop-types';

const Upload = (props) => {
  return (
    <form>
      <h2>updown</h2>
      <input
        type="file"
        onChange={props.handleOnChange}
      />
    </form>
  );
};

Upload.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
};

export default Upload;
