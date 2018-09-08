import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    axios.post('/reviews', {id: 2})
      .then((response) => {
        console.log(response.data);
      });
  }



  render() {
    return (
      <div>
        Yay
      </div>
    )
  }
}