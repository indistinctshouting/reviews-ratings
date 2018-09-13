import React from 'react';

export default class VoteButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let count = {
      useful: this.props.votes.useful || '',
      funny: this.props.votes.funny || '',
      cool: this.props.votes.cool || ''
    };
    return (
      <div className="footer-buttons">
        <button>Useful {count.useful}</button>
        <button>Funny {count.funny}</button>
        <button>Cool {count.cool}</button>
      </div>
    );
  }
}