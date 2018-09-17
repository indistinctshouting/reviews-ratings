import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';

const ActionLinks = ({name}) => (
  <ul className="action-links action-links-container">
    <li className="link">
      <div>
        <FontAwesomeIcon icon={faShareSquare}/>
      </div>
      <div className="link-text link-text-first">Share review</div>
    </li>
    <li className="link">
      <div>
        <FontAwesomeIcon icon={faCode}/>
      </div>
      <div className="link-text">Embed review</div>
    </li>
    <li className="link">
      <div>
        <FontAwesomeIcon icon={faMedal}/>
      </div>
      <div className="link-text">Compliment</div>
    </li>
    <li className="link">
      <div>
        <FontAwesomeIcon icon={faComments}/>
      </div>
      <div className="link-text">Send message</div>
    </li>
    <li className="link">
      <div>
        <FontAwesomeIcon icon={faUserPlus}/>
      </div>
      <div className="link-text">Follow {name}</div>
    </li>
  </ul>
);

export default ActionLinks;