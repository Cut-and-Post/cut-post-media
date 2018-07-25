'use strict';

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const bodyParser = require('body-parser');
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '1mb'}));
app.use(express.static(path.join(__dirname, 'dist')));

// healthcheck
app.get('/status', function (req, res) {
  res.json({ status: 'OK' });
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

server.listen(port);


