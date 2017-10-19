import * as express from 'express';
import { Game } from './gameObject';
import * as bodyParser from 'body-parser';

export const router = express.Router();
const game = new Game();

let roomQuotes: any[] = [];

router
.use(bodyParser.urlencoded({ extended: true }))
    .get('/pictures', (req, res) => res.send(game.pictures))
    .get('/quotes', (req, res) => res.send(game.quotes))
    .get('/players', (req, res) => res.send(game.players))
    .get('/room/quotes', (req, res) => res.send(roomQuotes))
    .post('/room/quotes', (req, res) => {
        roomQuotes.push({id: req.body.id, text: req.body.text, player: req.body.player });
        res.sendStatus(201);
    } )
    