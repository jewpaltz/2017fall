var http = require("express");
var handler = require("./httpHandler.js");
var game = require("./gameController");
var server = http();
server.use("/game", game.router);
server.use("/old", handler.main);
server.use("/client", http.static('jquery-mockup'));
server.listen(3000);
console.log("http://localhost:3000");
//# sourceMappingURL=index.js.map