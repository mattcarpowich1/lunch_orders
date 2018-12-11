const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');
const app        = express();
const PORT       = process.env.PORT || 3001;
const index      = require('./routes/index.js');

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', index);
app.listen(PORT, function() {
  console.log('Listening on port 3001...');
});