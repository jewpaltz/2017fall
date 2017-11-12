const express = require("express");
const game = require("./gameObject");

const router = express.Router();

router
    .get("/pictures", (req, res) => res.send(game.pictures))
    .get("/quote", (req, res) => res.send(game.getNextQuote()))
    .get("/quotes", (req, res) => res.send( Array(7).fill().map( () => game.getNextQuote() )))
    .get("/room/picture", (req, res) => res.send(game.room.picture))
    .get("/room/quotes", (req, res) => res.send(game.room.quotes))
    .get("/room", (req, res) => res.send(game.room))
    .post("/room/picture",(req, res) => {
        game.room.picture = game.getNextPicture();
        res.status(201).send(game.room.picture);
    })
    .post("/room/quotes",(req, res) => {
        req.body.player = game.room.players[req.body.playerId];
        game.room.quotes.push(req.body);
        res.status(201).send(game.getNextQuote());
    })
    .post("/room/players",(req, res) => {
        game.room.players.push(req.body);
        res.status(201).json(game.room.players.length - 1);
    })


module.exports.router = router;