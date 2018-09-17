import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const CheckInsFlag = ({checkIns}) => {
  if (checkIns > 0) {
    return (<div><FontAwesomeIcon icon={faCheckCircle}/>{checkIns} check-ins</div>);
  } else {
    return null;
  }
};

export default CheckInsFlag;