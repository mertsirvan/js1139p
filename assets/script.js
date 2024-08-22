let teamHomeScore = 0;
let teamAwayScore= 0;
let teamHomeName = "Home Team";
let teamAwayName = "Away Team";

let teamHomeScoreValue = document.getElementById("teamhome-score");
let teamAwayScoreValue = document.getElementById("teamaway-score");

let teamHomeNameValue = document.getElementById("teamhome-name");
let teamAwayNameValue = document.getElementById("teamaway-name");

function addScore(team) {
    if (team === "teamHome") {
        teamHomeScore++;
        teamHomeScoreValue.innerText = teamHomeScore;

    } else if (team === "teamAway") {
        teamAwayScore++;
        teamAwayScoreValue.innerHTML = teamAwayScore;
    }

    console.log(teamHomeScoreValue);
};

function removeScore(team) {
    if (team === "teamHome" && teamHomeScore > 0) {
        teamHomeScore--;
        teamHomeScoreValue.innerHTML = teamHomeScore
        
    } else if (team === "teamAway" && teamAwayScore > 0) {
        teamAwayScore--;
        teamAwayScoreValue.innerHTML = teamAwayScore;
    }

console.log(teamAwayScoreValue);

};

function resetScore() {
    teamHomeScore = 0;
    teamAwayScore = 0;
    teamHomeScoreValue.innerHTML = teamHomeScore;
    teamAwayScoreValue.innerHTML = teamAwayScore;
};

function changeTeamName(team) {
    if (team === "teamHome") {
        teamHomeNameValue = prompt("Please enter Team name");
        document.getElementById("teamhome-name").innerHTML = teamHomeNameValue;
    } if (teamHomeNameValue == null || teamHomeNameValue == "") {
        document.getElementById("teamhome-name").innerHTML = teamHomeName;
    } else if (team === "teamAway") {
        teamAwayNameValue = prompt("Please enter Team name");
        document.getElementById("teamaway-name").innerHTML = teamAwayNameValue;
    } if (teamAwayNameValue == null || teamAwayNameValue == "") {
        document.getElementById("teamaway-name").innerHTML = teamAwayName;
    }
};

function customScore(customscore) {
    if (customscore == "teamHome") {
        teamHomeScoreValue = prompt("Please enter score");
        
        if (isNaN(teamHomeScoreValue )) { 
            alert('Only numbers!!'); 
        } else {
        document.getElementById("teamhome-score").innerHTML = teamHomeScoreValue;
        }
    } if (teamHomeScoreValue == null || teamHomeScoreValue == "") {
        document.getElementById("teamhome-score").innerHTML = teamHomeScore;

    } else if (customscore == "teamAway") {
        teamAwayScoreValue = prompt("Please enter score");

        if (isNaN(teamAwayScoreValue )) { 
            alert('Only numbers!!'); 
        } else {
        document.getElementById("teamaway-score").innerHTML = teamAwayScoreValue;
        }
    } if (teamAwayScoreValue == null || teamAwayScoreValue == "") {
        document.getElementById("teamaway-score").innerHTML = teamAwayScore;
    }
};

