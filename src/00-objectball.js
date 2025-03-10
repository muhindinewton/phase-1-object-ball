function gameObject () {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "white"],
            players: {
                "Allan Anderson": {number: 0, shoe:16, points:22, rebounds:12, assists:12, steals:3, blocks:1, slamDunks:1},
                "Reggie Evans": {number: 30, shoe:14, points:12, rebounds:12, assists:12, steals:12, blocks:12, slamDunks:7},
                "Brook Lopez": {number: 11, shoe:17, points:17, rebounds:19, assists:10, steals:3, blocks:1, slamDunks:15},
                "Mason Plumlee": {number: 1, shoe:19, points:26, rebounds:12, assists:6, steals:3, blocks:8, slamDunks:5},
                "Jason Terry": {number: 31, shoe:15, points:19, rebounds:2, assists:2, steals:4, blocks:11, slamDunks:1},
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {number: 4, shoe:18, points:10, rebounds:1, assists:1, steals:2, blocks:7, slamDunks:2},
                "Bismak Biyombo": {number: 0, shoe:16, points:12, rebounds:4, assists:7, steals:7, blocks:15, slamDunks:10},
                "DeSagna Diop": {number: 2, shoe:14, points:24, rebounds:12, assists:12, steals:4, blocks:5, slamDunks:5},
                "Ben Gordon": {number: 8, shoe:15, points:33, rebounds:3, assists:2, steals:1, blocks:1, slamDunks:0},
                "Brendan Haywood": {number: 33, shoe:15, points:6, rebounds:12, assists:12, steals:22, blocks:5, slamDunks:12}, 
            }
        }
    }
}
console.log (gameObject())

function numPointsScored(playerName) {
    let game = gameObject(); // Get the full game data
    

    for (let teamKey in game) { // Iterate through both home and away teams
        let team = game[teamKey]; // Get the team object
        let players = team.players;  // Get the players object
          
    
        if (players[playerName]){  // Check if the player's name exists
            return players[playerName].points; // Return the points scored
        }
    }
    return "Player not found";

} 
console.log (numPointsScored("Ben Gordon"))

function shoeSize (playerName) {
    let game = gameObject();
    for (let teamKey in game) {
        let team = game[teamKey];
        let players = team.players;

        if (players[playerName]) {
            return players[playerName].shoe;
        }
    }
    return "Player not found"
}
console.log (shoeSize ("Bismak Biyombo"))

function teamColors (teamName){
    let game = gameObject();
    for (let teamKey in game) {
        if (game[teamKey].teamName === teamName){
            return game[teamKey].colors;
        }
    }
    return "Team not found"
}
console.log (teamColors("Charlotte Hornets"))

function teamNames () {
    let game = gameObject ();
    return [game.home.teamName, game.away.teamName]

}
console.log (teamNames())

function playerNumbers (teamName) {
    let game = gameObject ();
    for (let teamKey in game) {
        if (game[teamKey].teamName === teamName) {
            let players = game[teamKey].players;
            let jerseyNumbers = []

            for (let player in players) {
                jerseyNumbers.push (players[player].number);
            }
            return jerseyNumbers;
        }

    }
    return[];
}
console.log(playerNumbers("Charlotte Hornets"))

function playerStats (playerName) {
    let game = gameObject();
    for (let teamKey in game) {
        if (game[teamKey].players[playerName]) {
            return game[teamKey].players[playerName]
        }
    }
    return "Player not found"
}
console.log (playerStats ("Bismak Biyombo"))

function bigShoeRebounds () {
    let game = gameObject ();
    let maxShoe = 0;
    let rebounds = 0;

    for (let teamKey in game) {
        let players = game[teamKey].players;

        for (let player in players) {
            if (players[player].shoe > maxShoe) {
                maxShoe = players[player].shoe
                rebounds = players[player].rebounds;
            }
        }
    }
    return rebounds;
}
console.log (bigShoeRebounds ())

function mostPointsScored() {
    let game = gameObject()
        let maxPoints = 0;
        let topPlayer = "";
        for (let teamKey in game) {
            for (let player in game[teamKey].players) {
                if (game[teamKey].players[player].points > maxPoints) {
                    maxPoints = game[teamKey].players[player].points;
                    topPlayer = player;
                }
            }
        }
        return topPlayer;
}
console.log (mostPointsScored())

function winningTeam() {
    let game = gameObject ();
    let teamPoints = {};
    for (let teamKey in game) {
        let teamName = game[teamKey].teamName;
        teamPoints[teamName] = Object.values(game[teamKey].players).reduce((sum, player) => sum + player.points, 0);

    }
    return Object.keys(teamPoints).reduce((a, b) => teamPoints[a] > teamPoints[b] ? a:b);
}
console.log (winningTeam())

function playerWithLongestName() {
    let game = gameObject ();
    let longestName = "";
    for (let teamKey in game) {
        let players = game[teamKey].players;

        for (let player in players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }
    return longestName;
}
console.log (playerWithLongestName())

function mostSteals() {
    let game = gameObject()
        let maxSteals = 0;
        let topPlayer = "";
        for (let teamKey in game) {
            for (let player in game[teamKey].players) {
                if (game[teamKey].players[player].steals > maxSteals) {
                    maxPoints = game[teamKey].players[player].steals;
                    topPlayer = player;
                }
            }
        }
        return topPlayer;
}
console.log (mostSteals())

function doesLongestNameStealATon () {
    return playerWithLongestName() === mostSteals()
}

console.log(doesLongestNameStealATon ())


