import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

const UpdatedFlag = ({updated}) => {
  if (updated) {
    return (<div><FontAwesomeIcon icon={faSync}/>Updated review</div>);
  } else {
    return null;
  }
};

export default UpdatedFlag;