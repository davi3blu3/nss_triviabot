// npm dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// services
const validate = require('./services/validate');
const create = require('./services/create');

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

  /*
   *API
   */

  // handle slash command initializing trivia request
  .post('/start_poll', urlencodedParser, (req, res) => {
    // check for missing data
    if (!req.body || !req.body.text) {
      res.status(400).end();
      // validate slack team credentials
    } else if (!validate.initRequestIsValid(req.body)) {
      res.status(403).end('Access forbidden');
    } else {
      // Success condition, continue
      res.status(200).end();
      create.poll(req.body);
    }
  })

  // handle poll votes
  .post('/vote', urlencodedParser, (req, res) => {
    res.status(200).end();
    console.log('Vote received:');
    console.log(
      // req.body.payload.user.name,
      // 'voted for',
      req.body.payload.actions[0].value
    );
  })

  // listen for requests
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
