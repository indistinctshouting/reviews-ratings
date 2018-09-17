import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const CheckInsFlag = ({checkIns}) => {
  if (checkIns > 0) {
    return (<div className="check-in-container"><FontAwesomeIcon className="check-in-icon" icon={faCheckCircle}/> {checkIns} check-ins</div>);
  } else {
    return null;
  }
};

export default CheckInsFlag;