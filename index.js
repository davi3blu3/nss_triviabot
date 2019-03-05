// npm dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// variables
const PORT = process.env.PORT || 5000;

// web request server
app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
