// npm dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// variables
const PORT = process.env.PORT || 5000;

// web request server
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
