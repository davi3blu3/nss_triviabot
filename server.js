// npm dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// variables
const PORT = process.env.PORT || 5000;
const urlencodedParser = bodyParser.urlencoded({ extended: false });

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

  // to handle slash prompt command from slack
  .post('/createDayPoll', urlencodedParser, (req, res) => {
    if (!req.body) {
      return res.sendStatus(400);
    } else {
      console.log(req.body);
      return res.json(req.body);
    }
  })

  // listen for requests
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
