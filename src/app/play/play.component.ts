import { Component, OnInit } from '@angular/core';
import { Room, Player, Quote } from '../models/game';
import { Http } from "@angular/http";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

    apiRoot = "//localhost:3001"
    room = new Room();
    me:Player;

    availablePlayers = [ { name: "Moshe Plotkin"}, { name: "Bracha Plotkin"}]
    constructor(private http: Http) { }

    ngOnInit() {
        setInterval(()=> this.update(), 1000)
    }

    update(){
        this.http.get(this.apiRoot + "/game/room").subscribe( data => {
            this.room = data.json();
        });
    }

    logon(e: MouseEvent, i: number){
        e.preventDefault();
        const player = this.availablePlayers[i];
        this.http.post(this.apiRoot + "/game/room/players", player)
            .subscribe(data=> {
                this.me = {... player, id: +data.text()}
                this.http.get(this.apiRoot + "/game/quotes").subscribe( data =>{
                    this.me.quotes = data.json();
                })
            });
    }

    flipPicture(e: MouseEvent){
        e.preventDefault();
        this.http.post(this.apiRoot + "/game/room/picture", {})
            .subscribe();
    }
    
    submitQuote(e: MouseEvent, quote: Quote, i: number){
        e.preventDefault();
        const data = { text: quote.text, playerId: 0 };
        this.http.post(this.apiRoot + "/game/room/quotes", data)
            .subscribe(data=> {
                this.me.quotes.splice(i, 1);
                this.me.quotes.push(data.json());
            });
    }
    

}
