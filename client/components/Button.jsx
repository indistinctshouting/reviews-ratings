import React from 'react';

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
    return (
      <button onClick={() => { this.handleButtonClick(this.state.count, this.state.clicked); }}>
        {name} {count}
      </button>
    );
  }
}