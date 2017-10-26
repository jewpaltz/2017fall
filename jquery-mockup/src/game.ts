import * as $ from 'jquery';

export class Quote {
    text: string
}

export class Player {
    name: string = "Moshe Plotkin";
    quotes: Quote[] = [];
    score: number = 0;

    drawQuotes(){
        $("#my-quotes").html(
            this.quotes.map( x => `<li class="list-group-item">${x.text}</li>` ).join("")
        );
    }
}

export class Room {
    players: Player[] = [new Player(), new Player()];
    dealer: Player;
    picture: string;
    quotes: Quote[] = [];

    drawPicture() {
        $("#picture").attr("src", this.picture);
    }
    drawQuotes(){
        $("#played-quotes").html(
            this.quotes.map( x => `<li class="list-group-item">${x.text}</li>` ).join("")
        );
    }
    drawPlayers(){
        $("#players").html(
            this.players.map( x => `<li class="list-group-item">${x.name}</li>` ).join("")
        );
    }
    update(){
            $.get("/game/room/picture").done( data => {
                this.picture = data;
                this.drawPicture();
            })
            $.getJSON("/game/room/quotes").done( data =>{
                this.quotes = data;
                this.drawQuotes();
            })
    }
    init(){
        room.drawPlayers();
        setInterval(() => this.update(), 1000);
    }
}

export class Game {
    players: Player[] = [];
    pictures: string[] = [];
    quotes: Quote[] = [];

    init() {
        return $.when(
            $.getJSON("/game/pictures").done( data => {
                this.pictures = data;
            }),
            $.getJSON("/game/quotes").done( data =>{
                this.quotes = data;
            })
        );
    }
}

// Controller

const game = new Game();
const room = new Room();
const me = new Player();

game.init().done(()=>{

    me.quotes = game.quotes;
    me.drawQuotes();

});
room.init();


$("#cmd-flip").click(function(e){
    e.preventDefault();
    $.post("/game/room/picture")
})

$("#my-quotes").click("li",function(e){
    e.preventDefault();
    var target: any = e.originalEvent.target;
    $.post("/game/room/quotes", { text: target.text() })
})