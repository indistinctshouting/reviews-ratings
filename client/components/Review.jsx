import React from 'react';
import RatingBox from './RatingBox.jsx';
// might convert to stateless functional component
export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state vars tbd but I think I'll need em
    }
  }

  render() {
    return (
      <div>
        <RatingBox rating={this.props.review.rating}/>
        Yeah!
      </div>
    );
  }
}