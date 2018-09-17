import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';

const ActionLinks = (props) => (
  <ul>
    <li><FontAwesomeIcon icon={faShareSquare}/>Share review</li>
    <li><FontAwesomeIcon icon={faCode}/>Embed review</li>
    <li><FontAwesomeIcon icon={faMedal}/>Compliment</li>
    <li><FontAwesomeIcon icon={faComments}/>Send message</li>
    <li><FontAwesomeIcon icon={faUserPlus}/>Follow (name here)</li>
  </ul>
);

export default ActionLinks;