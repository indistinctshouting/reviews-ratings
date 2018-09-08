import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  getReviewData(id) {
    axios.post('/reviews', {id})
      .then((response) => {
        this.setState({
          reviews: response.data
        })
      });
  }

  render() {
    return (
      <div>
        <ReviewList />
      </div>
    )
  }
}