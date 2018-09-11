import React from 'react';

const UserInfo = (props) => (
  <div>
    <div>
      <img src={props.owner.picture} />
    </div>
    <div>
      <h3>
        {props.owner.name}
      </h3>
      <div>{props.owner.location}</div>
      <div>{props.owner.friends} Friends</div>
      <div>{props.owner.photos} Photos</div>
      <div>{props.owner.reviewCount} Reviews</div>
      <div>{props.owner.elite ? 'Elite \'18' : ''}</div>
    </div>
  </div>
);

export default UserInfo;