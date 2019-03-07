// npm dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// variables
const PORT = process.env.PORT || 5000;

app
  // set up server
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  // handle web requests
  .get('/', (req, res) => res.render('pages/index'))
  .get('/about', (req, res) => res.render('pages/about'))

  // api
  .get('/createDayPoll', (req, res) => {
    console.log('request received');
    res.send(`{
      json: "data"
    }`);
  })

  // listen for requests
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
