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
        <span className="user-info-text name-text">
          {props.owner.name}
        </span>
      </div>
      <div className="user-location">
        <span className="user-info-text location-text">
          {props.owner.location}
        </span>
      </div>
      <div className="user-friends">
        <span className="friends-icon">
          <FontAwesomeIcon icon={faUserFriends}/>
        </span>
        <span className="user-info-text">
          <b>{props.owner.friends}</b> Friends
        </span>
      </div>
      <div className="user-reviews">
        <span className="reviews-icon">
          <FontAwesomeIcon icon={faStar}/>
        </span>
        <span className="user-info-text">
          <b>{props.owner.reviewCount}</b> Reviews
        </span>
      </div>
      <div className="user-photos">
        <span className="photos-icon">
          <FontAwesomeIcon icon={faCamera} />
        </span>
        <span className="user-info-text">
          <b>{props.owner.photos}</b> Photos
        </span>
      </div>
      <div>
        <span className="user-info-text elite">
          {props.owner.elite ? 'Elite \'18' : ''}
        </span>
      </div>
    </div>
  </div>
);

export default UserInfo;