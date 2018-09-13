import React from 'react';
import RatingBox from './RatingBox.jsx';
import TextBlock from './TextBlock.jsx';
import UserInfo from './UserInfo.jsx';
import ActionLinks from './ActionLinks.jsx';
// might convert to stateless functional component
export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state vars tbd but I think I'll need em
    };
  }

  render() {
    return (
      <div className="review-container">
        <div className="sidebar-wrapper">
          <UserInfo owner={this.props.review.owner}/>
          <div className="action-links"><ActionLinks /></div>
        </div>
        <div className="review-wrapper">
          <div className="rating-box"><RatingBox rating={this.props.review.rating} /></div>
          <div><TextBlock className="text-block" text={this.props.review.text} /></div>
        </div>
      </div>
    );
  }
}