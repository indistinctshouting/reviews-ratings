import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinAlt } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faGrinStars } from '@fortawesome/free-solid-svg-icons';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      count: this.props.count
    };
    this.handleButtonClick = this.props.handleButtonClick.bind(this);
  }

  render() {
    let name = this.props.name[0].toUpperCase() + this.props.name.slice(1);
    let count = this.state.count || '';
    let classStyle = this.state.clicked ? 'btn-alt' : 'btn';
    let icon;
    if (name === 'Useful') {
      icon = faLightbulb;
    } else if (name === 'Funny') {
      icon = faGrinAlt;
    } else {
      icon = faGrinStars;
    }
    return (
      <button className={classStyle} onClick={() => { this.handleButtonClick(this.state.count, this.state.clicked); }}>
        <FontAwesomeIcon icon={icon}/> <b>{name}</b> {count}
      </button>
    );
  }
}