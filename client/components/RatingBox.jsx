import React from 'react';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingBox = (props) => (
  <div style={{backgroundColor: "red", borderRadius: "5px", padding: "5px", width: "90px"}}>
    {
      _.map([null, null, null, null, null], (star, i) => {
        if (i < props.rating) {
          return <span><FontAwesomeIcon icon={faStar} style={{color: "gold"}}/></span>;
        } else {
          return <span><FontAwesomeIcon icon={faStar} style={{color: "white"}}/></span>;
        }
      })
    }
  </div>
);

export default RatingBox;