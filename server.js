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

  // handle slash prompt command initializing trivia request
  .post('/triviaInit', urlencodedParser, (req, res) => {
    if (!req.body || !req.body.text) {
      // if request contains no data, return 400 Bad Request
      return res.sendStatus(400);
    } else if (!validate.initRequest(req.body)) {
      // if payload does not match slack team credentials, return 401 Forbidden
      return res.sendStatus(401);
    } else {
      // Success condition, continue
      console.log(req.body);
      create.poll(req.body.text);
      return res.sendStatus(200);
    }
  })

  // listen for requests
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
