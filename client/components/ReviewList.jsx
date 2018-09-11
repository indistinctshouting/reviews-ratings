import React from 'react';
import Review from './Review.jsx';
import _ from 'lodash';

const ReviewList = (props) => (
  <div className="review-list">
    <ul>
      {
        _.map(props.reviews, (review) => {
          return <Review key={review._id} review={review}/>;
        })
      }
    </ul>
  </div>
);

export default ReviewList;