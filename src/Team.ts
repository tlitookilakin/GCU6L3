import Player from "./Player";

export class Team {

    players : Player[] = [];
    teamName : string = "";

    constructor(name : string) {
        this.teamName = name;
    }

    addPlayer(who : Player) : void {
        this.players.push(who);
    }

    removePlayer(which : number) : void {
        this.players.splice(which, 1);
    }

    setActive(which : number, active : boolean) : void {
        this.players[which].active = active;
    }

    getPlayerCount() : number {
        return this.players.length;
    }

    logActivePlayers() : void {
        for (const player of this.getActivePlayers()) {
            console.log(this.playerToString(player));
        }
    }

    getActivePlayers() : Player[] {
        return this.players.filter((p, i) => p.active);
    }

    removePlayerByName(name : string) : void {
        let target : number = this.players.findIndex((p, i) => p.name === name) ?? -1;
        if (target < 0)
            return;

        this.players.splice(target, 1);
    }

    toString() : string {
        return `Team ${this.teamName}:\n\t${this.players.map(this.playerToString).join("\n\t")}`;
    }

    playerToString(who : Player) : string {
        return `Jersey: ${who.jersey}, Name: ${who.name}`;
    }

    sortPlayers() : void {
        this.players.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
    }
}