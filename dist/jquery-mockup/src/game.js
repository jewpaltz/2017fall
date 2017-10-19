"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var Quote = /** @class */ (function () {
    function Quote() {
    }
    return Quote;
}());
exports.Quote = Quote;
var Player = /** @class */ (function () {
    function Player() {
        this.quotes = [];
        this.score = 0;
    }
    Player.prototype.drawQuotes = function () {
        $("#my-quotes").html(this.quotes.map(function (x) { return "<li class=\"list-group-item\">" + x.text + "</li>"; }).join(""));
    };
    return Player;
}());
exports.Player = Player;
var Room = /** @class */ (function () {
    function Room() {
        this.players = [];
        this.quotes = [];
    }
    Room.prototype.drawPicture = function () {
        $("#picture").attr("src", this.picture);
    };
    return Room;
}());
exports.Room = Room;
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.players = [];
        this.pictures = [];
        this.quotes = [];
        this.promise = $.when($.getJSON('/game/quotes').done(function (data) { return _this.quotes = data; }), $.getJSON('/game/pictures').done(function (data) { return _this.pictures = data; }));
    }
    return Game;
}());
exports.Game = Game;
// Controller
var game = new Game();
var room = new Room();
var me = new Player();
game.promise.done(function () {
    var i = 0;
    room.picture = game.pictures[i];
    room.drawPicture();
    me.quotes = game.quotes;
    me.drawQuotes();
    $("#cmd-flip").click(function (e) {
        e.preventDefault();
        i++;
        room.picture = game.pictures[i];
        room.drawPicture();
    });
});
//# sourceMappingURL=game.js.map