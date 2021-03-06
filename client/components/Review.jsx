import React from 'react';
import TextBlock from './TextBlock.jsx';
import UserInfo from './UserInfo.jsx';
import ActionLinks from './ActionLinks.jsx';
import VoteButtons from './VoteButtons.jsx';
import ReviewHeader from './ReviewHeader.jsx';
import styled from 'styled-components';

const ReviewWrapper = styled.div`
  display:grid;
  grid-template-columns: 1fr 2fr;
  min-height: 240px;
  width: 440;
  padding-top: 18px;
  padding-bottom: 17px;
  border-bottom: 1px solid #e6e6e6;
  :hover .action-links {
    opacity: 1;
    display: grid;
    grid-template-rows: repeat(5, 19px);
    width: 217px;
    height: 130px;
  }
`;

const ReviewTextWrapper = styled.div`
  display: grid;
  grid-template-rows: min-content min-content 60px;
  grid-row-gap: 15px;
  padding: 0 15px;
  width: 382px;
`;

const ActionLinksWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 19px);
  width: 217px;
  height: 130px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  -webkit-transition: opacity 0.3s ease-in-out;
`;

const Review = ({review}) => {
  
  const formatName = (name) => {
    let names = name.split(' ');
    let lastInitial = `${names[1][0]}.`;
    return `${names[0]} ${lastInitial}`;
  };

  review.owner.name = formatName(review.owner.name);

  return (
    <ReviewWrapper>
      <div className="sidebar-wrapper">
        <UserInfo owner={review.owner}/>
        <ActionLinksWrapper className="action-links">
          <ActionLinks name={review.owner.name}/>
        </ActionLinksWrapper>
      </div>
      <ReviewTextWrapper>
        <div>
          <ReviewHeader 
            rating={review.rating} 
            date={review.date} 
            updated={review.updated}
            checkIns={review.owner.checkIns}
          />
        </div>
        <div><TextBlock className="text-block" text={review.text} /></div>
        <div className="vote-buttons"><VoteButtons votes={review.upvotes}/></div>
      </ReviewTextWrapper>
    </ReviewWrapper>
  );
};

export default Review;