import React from 'react';
import Review from './Review.jsx';
import _ from 'lodash';

const ReviewList = (props) => (
  <div>
    <ul>
      {
        _.map(props.reviews, (review) => {
          return <Review review={review}/>;
        })
      }
    </ul>
  </div>
);

export default ReviewList;