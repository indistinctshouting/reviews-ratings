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
    let restaurantId = window.location.pathname.split('/')[1];
    this.getReviewData(restaurantId);
  }

  getReviewData(id) {
    axios.get(`/reviews/id/${id}`)
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