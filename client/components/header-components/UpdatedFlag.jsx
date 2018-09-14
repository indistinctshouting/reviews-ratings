import React from 'react';

const UpdatedFlag = ({updated}) => {
  if (updated) {
    return (<div>Updated review</div>);
  } else {
    return null;
  }
};

export default UpdatedFlag;