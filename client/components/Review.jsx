import React from 'react';
import RatingBox from './RatingBox.jsx';
<<<<<<< HEAD
import TextBlock from './TextBlock.jsx';
=======
import UserInfo from './UserInfo.jsx';
>>>>>>> Added the titles of what the numbers are referring to
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
<<<<<<< HEAD
        <div className="review-sidebar">
          Stuff here
        </div>
        <div className="review-wrapper">
          <div className="rating-box"><RatingBox rating={this.props.review.rating} /></div>
          <div><TextBlock className="text-block" text={this.props.review.text} /></div>
        </div>
=======
        <UserInfo owner={this.props.review.owner}/>
        <RatingBox rating={this.props.review.rating}/>
        Yeah!
>>>>>>> Added the titles of what the numbers are referring to
      </div>
    );
  }
}