
export class Quote {
    text: string;
    player?: Player
}

export class Player {
        public readonly id: number;
        public name: string = "Moshe Plotkin";
        public quotes?: Quote[] = [];
        public score?: number = 0;
  constructor(
    ){}
}

export class Room {
    players: Player[] = [];
    dealer: Player;
    picture: string;
    quotes: Quote[] = [];

}
