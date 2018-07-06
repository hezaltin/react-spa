import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3001;
const app = express();
const bodyParser = require('body-parser');
const compiler = webpack(config);
const http = require('http');
const api = require('./routes/api');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use('/api', api);

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

const server = http.createServer(app);

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
