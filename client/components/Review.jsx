import React from 'react';
import TextBlock from './TextBlock.jsx';
import UserInfo from './UserInfo.jsx';
import ActionLinks from './ActionLinks.jsx';
import VoteButtons from './VoteButtons.jsx';
import ReviewHeader from './ReviewHeader.jsx';
// might convert to stateless functional component
export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.props.review.owner.name = this.formatName(this.props.review.owner.name);
  }

  formatName(name) {
    let names = name.split(' ');
    let lastInitial = `${names[1][0]}.`;
    return `${names[0]} ${lastInitial}`;
  }
  
  render() {
    return (
      <div className="review-container">
        <div className="sidebar-wrapper">
          <UserInfo owner={this.props.review.owner}/>
          <div className="action-links"><ActionLinks name={this.props.review.owner.name}/></div>
        </div>
        <div className="review-wrapper">
          <div>
            <ReviewHeader 
              rating={this.props.review.rating} 
              date={this.props.review.date} 
              updated={this.props.review.updated}
              checkIns={this.props.review.owner.checkIns}
            />
          </div>
          <div><TextBlock className="text-block" text={this.props.review.text} /></div>
          <div className="vote-buttons"><VoteButtons votes={this.props.review.upvotes}/></div>
        </div>
      </div>
    );
  }
}