import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }
  
  componentDidMount() {
    // let randomRestaurantId = Math.floor((Math.random() * 100) + 1);
    this.getReviewData(38);
  }

  getReviewData(id) {
    axios.post('/reviews', {id})
      .then((response) => {
        console.log(response.data);
        this.setState({
          reviews: response.data
        });
      });
  }

  render() {
    return (
      <div>
        <ReviewList reviews={this.state.reviews}/>
      </div>
    );
  }
}