import React from 'react';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingBox = (props) => (
  <div className='stars'>
    {// close but no cigar, just need to get the star centered then add conditionals in function to display correct hue for number of stars
      _.map([null, null, null, null, null], (star, i) => {
        if (i < props.rating) {
          return (
            <div className='star-box' style={{backgroundColor: 'red', borderRadius: '5px', width: '25px', height: '25px'}}>
              <div>
                <FontAwesomeIcon icon={faStar} style={{align: 'vertical', color: 'white', width: '18px', height: '18px'}}/>
              </div>
            </div>
          );
        } else {
          return (
            <div className='star-box' style={{backgroundColor: 'grey', borderRadius: '5px', width: '25px', height: '25px'}}>
              <div>
                <FontAwesomeIcon icon={faStar} style={{align: 'vertical', color: 'white', width: '18px', height: '18px'}}/>
              </div>
            </div>
          );        
        }
      })
    }
  </div>
);

export default RatingBox;