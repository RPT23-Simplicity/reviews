/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');

const { findReview } = require('../database-mysql/index');

const app = express();

app.use(cors({
  origin: '*',
}));
app.use(express.static(`${__dirname}/../react-client/dist`));

app.get('/api/reviews/:productID', (req, res) => {
  const query = req.params.productID;
  console.log(req.params);
  findReview(query, (err, result) => {
    if (err) {
      res.status(500);
      throw (err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.listen(3003, () => {
  console.log('listening on port 3003!');
});
