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

app.get('/get-portfolio', function (req, res) {
  res.json([
    {
      "name": "Kendra on Top",
      "channel": "WEtv",
      "videoLink": "",
      "thumb": "kendraOnTop.png",
      "purpose": [
        "show launches"
      ],
      "genre": [],
      "producer": {
        "name": "Joe Schmo"
      },
      "editor": {}
    },
    {
      "name": "Fear the Walking Dead",
      "channel": "AMC",
      "videoLink": "",
      "thumb": "fearWalkingDead.png",
      "purpose": [
        "behind the scenes",
        "combo/marathons"
      ],
      "genre": [
        "thrillers",
        "sci-fi"
      ],
      "producer": {
        "name": "Lisa Smith"
      },
      "editor": {}
    },
    {
      "name": "Love and Hip Hop Holywood",
      "channel": "VH1",
      "videoLink": "daytimeDiva.png",
      "thumb": "",
      "purpose": [
        "show launches"
      ],
      "genre": [],
      "producer": {
        "name": "Lisa Smith"
      },
      "editor": {
        "name": "John Smith"
      }
    },
    {
      "name": "Daytime Divas",
      "channel": "VH1",
      "videoLink": "",
      "thumb": "daytimeDiva.png",
      "purpose": [],
      "genre": [
        "kids",
        "comedy",
        "drama"
      ],
      "producer": {},
      "editor": {
        "name": "Nancy Ling"
      }
    },
    {
      "name": "Nancy Nightmare",
      "channel": "Lifetime",
      "videoLink": "",
      "thumb": "nancyNightmare.png",
      "purpose": [
        "behind the scenes",
        "combo/marathons"
      ],
      "genre": [
        "thrillers",
        "sci-fi"
      ],
      "producer": {},
      "editor": {
        "name": "Rick Stein"
      }
    }
  ]);
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

server.listen(port);


