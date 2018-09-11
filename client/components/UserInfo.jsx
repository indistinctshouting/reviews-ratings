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
      <div>{props.owner.friends}</div>
      <div>{props.owner.photos}</div>
      <div>{props.owner.reviewCount}</div>
      <div>{props.owner.elite ? 'Elite \'18' : ''}</div>
    </div>
  </div>
);

export default UserInfo;