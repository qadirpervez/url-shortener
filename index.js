const express = require('express');
const app = express();
const db = require('./src/database/database');
const ShortUrl = require('./src/models/UrlShort');


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
// to set the view engine
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.get('/', function (req, res) {
  res.render('index')
});

// post route to submit a url https://google.com
//  and the response should be the shortened url.
// http://localhost:3000/dskghj

app.get('/list', async function(req,res){
  const shortUrls = await ShortUrl.find()
  res.render('url_list', { shortUrls: shortUrls })
})

app.post('/', async function (req,res){
  console.log(req.body);
  res.redirect('/list')
})

