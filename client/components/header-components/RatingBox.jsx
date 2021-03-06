import React from 'react';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

// need to center the stars better

const RatingBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 18px);
  grid-column-gap: 3px;
`;

// display: grid;
// grid-template-columns: 1fr;
// grid-template-rows: 1fr;
// align-items: center;
const StarWrapper = styled.div`
  text-align: center;
  font-size: 11px;
  height: 18px;
  border-radius: 4px;
`;

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
    <RatingBoxWrapper>
      {// close but no cigar, just need to get the star centered, could also refactor star to its own component
        _.map([null, null, null, null, null], (star, i) => {
          if (i < rating) {
            return (
              <StarWrapper style={{backgroundColor: starColor}}>
                <FontAwesomeIcon icon={faStar} style={{textAlign: 'center', color: 'white', position: 'relative', top: '1px', right: '0.5px'}}/>
              </StarWrapper>
            );
          } else {
            return (
              <StarWrapper style={{backgroundColor: 'grey'}}>
                <FontAwesomeIcon icon={faStar} style={{textAlign: 'center', color: 'white', position: 'relative', top: '1px', right: '0.5px'}}/>
              </StarWrapper>
            );        
          }
        })
      }
    </RatingBoxWrapper>
  );
};

export default RatingBox;