import React from 'react';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingBox = ({rating}) => {
  let starColor;
  if (rating === 1) {
    starColor = '#F2BD79';
  } else if (rating === 2) {
    starColor = '#FEC00F';
  } else if (rating === 3) {
    starColor = '#FF9143';
  } else if (rating === 4) {
    starColor = '#F15C4E';
  } else {
    starColor = '#D32223';
  }
  return (
    <div className='stars'>
      {// close but no cigar, just need to get the star centered
        _.map([null, null, null, null, null], (star, i) => {
          if (i < rating) {
            return (
              <div className='star-box' style={{backgroundColor: starColor, borderRadius: '4px'}}>
                <div>
                  <FontAwesomeIcon icon={faStar} style={{align: 'vertical', color: 'white'}}/>
                </div>
              </div>
            );
          } else {
            return (
              <div className='star-box' style={{backgroundColor: 'grey', borderRadius: '4px'}}>
                <div>
                  <FontAwesomeIcon icon={faStar} style={{align: 'vertical', color: 'white'}}/>
                </div>
              </div>
            );        
          }
        })
      }
    </div>
  );
};

export default RatingBox;