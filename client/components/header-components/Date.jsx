import React from 'react';

export default class Date extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.date.slice(0, 10).split('-').reverse().join('/')}
      </div>
    );
  }
}