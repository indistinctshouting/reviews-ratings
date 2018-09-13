import React from 'react';
import Button from './Button.jsx';
import _ from 'lodash';


export default class VoteButtons extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleButtonClick(count, clicked) {
    if (!count && !clicked) {
      count = 1;
    } else if (!clicked) {
      count += 1;
    } else if (clicked) {
      count -= 1;
    }
    console.log(count, clicked);
    this.setState({
      count,
      clicked: !clicked
    });
  }

  render() {
    return (
      <div className="footer-buttons">
        {
          _.map(this.props.votes, (value, key) => {
            return <Button name={key} count={value} handleButtonClick={this.handleButtonClick}/>;
          })
        }
      </div>
    );
  }
}