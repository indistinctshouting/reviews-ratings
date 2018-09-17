import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const CheckInsFlag = ({checkIns}) => {
  let style = {color: '#0077BC'};
  if (checkIns >= 5) {
    style.color = '#ECAB25';
  }
  if (checkIns > 0) {
    return (<div className="check-in-container"><FontAwesomeIcon className="check-in-icon" style={style} icon={faCheckCircle}/> {checkIns} check-ins</div>);
  } else {
    return null;
  }
};

export default CheckInsFlag;