const { response } = require('express');
const express = require('express');
const { getPairsOfPlayers } = require('./controller');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, resp = response, next) => {
  try {
    await getPairsOfPlayers(req, resp, next);
  } catch (error) {
    resp.status(500).json({ error });
  }
});

router.post('/', async (req, resp = response, next) => {
  console.log(req.body.valor);
  await axios.get('https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players')
    .then(function (responsee) {
      // handle success
      resp.datos = responsee;
      try {
        getPairsOfPlayers(req, resp, next);
      } catch (error) {
        resp.status(500).json({ error });
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});

module.exports = router;
