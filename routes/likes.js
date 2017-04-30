"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/", (req, res) => {
    console.log('req body resource_id: ' + req.body.resource_id);
    knex('likes')
    .insert({
      user_id: 2, //Need to get from req.session
      resource_id: 1//Need to get from req.body
    })
    .then( () => {
      res.end();
    })
  })
  return router;
}
