import { Team } from "./Team";

let team : Team = new Team("Chirrups");
team.addPlayer({name: "Wren", jersey: 1, active: true});
team.addPlayer({name: "Ethan", jersey: 2, active: true});
team.addPlayer({name: "DeAngelo", jersey: 8, active: true});
team.addPlayer({name: "Justin", jersey: 17, active: false});

team.logActivePlayers();
team.removePlayerByName("Ethan");
console.log("-");
team.logActivePlayers();

console.log(team.toString());
