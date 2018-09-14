import React from 'react';
// should be month/day/yr not day/month/year
const Date = ({date}) => (
  <div>
    {date.slice(0, 10).split('-').reverse().join('/')}
  </div>
);

export default Date;