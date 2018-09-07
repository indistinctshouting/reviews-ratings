const mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://localhost/fec');
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', () => {
  console.log('CONNECTED');
});

const reviewSchema = new mongoose.Schema({
  reviewId: Number, 
  restaurantId: Number,
  rating: Number,
  date: Date,
  text: String,
  owner: {
    picture: String,
    name: String,
    location: String,
    friends: Number,
    reviewCount: Number,
    photos: Number,
    checkIns: Number,
    elite: Boolean
  },
  updated: Boolean,
  upvotes: {
    useful: Number,
    funny: Number,
    cool: Number
  }
});

const Review = mongoose.model('Review', reviewSchema);

const gimmeRandomNumber = (max) => {
  return Math.floor(Math.random() * (max + 1));
}

let reviews = [];

for (let i = 1; i <= 1000; i++) {
  let review = new Review({
    reviewId: i, 
    restaurantId: Number,
    rating: Number,
    date: Date,
    text: String,
    owner: {
      picture: String,
      name: String,
      location: String,
      friends: Number,
      reviewCount: Number,
      photos: Number,
      checkIns: Number,
      elite: Boolean
    },
    updated: Boolean,
    upvotes: {
      useful: Number,
      funny: Number,
      cool: Number
    }
  })
}