"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var gameObject_1 = require("./gameObject");
exports.router = express.Router();
var game = new gameObject_1.Game();
exports.router
    .get('/pictures', function (req, res) { return res.send(game.pictures); })
    .get('/quotes', function (req, res) { return res.send(game.quotes); })
    .get('/players', function (req, res) { return res.send(game.players); });
//# sourceMappingURL=gameController.js.map