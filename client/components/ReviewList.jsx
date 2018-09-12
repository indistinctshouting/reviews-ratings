import React from 'react';
import Review from './Review.jsx';
import _ from 'lodash';

const ReviewList = (props) => (
  <div>
    <ul className="review-list-container">
      {
        _.map(props.reviews, (review) => {
          return <Review key={review._id} review={review}/>;
        })
      }
    </ul>
  </div>
);

export default ReviewList;