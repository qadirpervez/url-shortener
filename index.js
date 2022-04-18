const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('A simple URL Shortener');
});

// post route to submit a url https://google.com
//  and the response should be the shortened url.
// http://localhost:3000/dskghj

// get route to redirect the original url.

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
