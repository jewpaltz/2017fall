const express = require("express");
const game = require("./gameObject");

const router = express.Router();

router
    .get("/pictures", (req, res) => res.send(game.pictures))
    .get("/quotes", (req, res) => res.send(game.quotes))
    .get("/room/picture", (req, res) => res.send(game.room.picture))
    .post("/room/picture", (req, res) => game.room.picture = game.getPicture())
    .get("/room/quotes", (req, res) => res.send(game.room.quotes))
    

module.exports.router = router;