import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

const UpdatedFlag = ({updated}) => {
  if (updated) {
    return (
      <div className="updated-flag">
        <FontAwesomeIcon className="updated-icon" icon={faSync}/>
        <strong> Updated review</strong>
      </div>
    );
  } else {
    return null;
  }
};

export default UpdatedFlag;