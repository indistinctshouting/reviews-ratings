import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const UserInfo = (props) => (
  <div className="review-sidebar">
    <img className="user-avatar" src={props.owner.picture} />
    
    <div className="user-info">
      <div className="user-name">
        <span>
          {props.owner.name}
        </span>
      </div>
      <div className="user-location">
        <span>
          {props.owner.location}
        </span>
      </div>
      <div className="user-friends">
        <span className="friends-icon">
          <FontAwesomeIcon icon={faUserFriends}/>
        </span>
        <span>
          {props.owner.friends} Friends
        </span>
      </div>
      <div className="user-reviews">
        <span className="reviews-icon">
          <FontAwesomeIcon icon={faStar}/>
        </span>
        <span>
          {props.owner.reviewCount} Reviews
        </span>
      </div>
      <div className="user-photos">
        <span className="photos-icon">
          <FontAwesomeIcon icon={faCamera} />
        </span>
        <span>
          {props.owner.photos} Photos
        </span>
      </div>
      <div>
        <span>
          {props.owner.elite ? 'Elite \'18' : ''}
        </span>
      </div>
    </div>
  </div>
);

export default UserInfo;