const express = require('express');
const BodyParser = require('body-parser');
const app = express();
const db = require('./../database/');


app.use(BodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());

app.post('/reviews', (req, res) => {
  db.getRestaurantReviews(req.body.id, (reviews) => {
    // console.log(reviews[0]);
    res.send(reviews);
  });
});

app.use(express.static('public'));
app.listen(3000, () => {
  console.log('Port 3000 we read you loud and clear');
});
//Patch request to update upvotes is Advanced content