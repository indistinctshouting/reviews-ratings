import React from 'react';
import RatingBox from './header-components/RatingBox.jsx';
import Date from './header-components/Date.jsx';
import UpdatedFlag from './header-components/UpdatedFlag.jsx';
import CheckInsFlag from './header-components/CheckInsFlag.jsx';

const ReviewHeader = ({ rating, date, updated, checkIns}) => (
  <div className="header-container">
    <div className="header-upper">
      <RatingBox rating={rating}/>
      <Date date={date}/>
      <UpdatedFlag updated={updated} />
    </div>
    <CheckInsFlag checkIns={checkIns}/>
  </div>
);

export default ReviewHeader;