import React from 'react';

const CheckInsFlag = ({checkIns}) => {
  if (checkIns > 0) {
    return (<div>{checkIns} check-ins</div>);
  } else {
    return null;
  }
};

export default CheckInsFlag;