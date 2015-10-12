var countturns = 0;
var wins = 0;
var losses = 0;

function check() {
    debugger
    var panel = document.getElementById("panel2");
    var rannumber = Math.ceil(Math.random() * 3); //random number between 1 and 3
    var userchoice = document.getElementById("Select1").value;
    countturns++;

    //Convert int rannumber into computerchoice text
    switch (rannumber) {
        case 1:
            computerchoice = "Rock";
            break;
        case 2:
            computerchoice = "Scissors";
            break;
        case 3:
            computerchoice = "Paper";
            break;
    }

    panel.innerHTML = "You threw " + userchoice + " and the computer threw " + computerchoice + "<br>";

    //Determine winner by comparing computerChoice and userChoice
    if (computerchoice == userchoice) {
        panel.innerHTML += "Tie game!";
    }
    else if ((computerchoice == "Rock" && userchoice == "Scissors") ||
        (computerchoice == "Paper" && userchoice == "Rock")) {
        panel.innerHTML += "You lose!";
        losses++;
    }
    else if ((computerchoice == "Scissors" && userchoice == "Rock") ||
        (computerchoice == "Rock" && userchoice == "Paper")) {
        panel.innerHTML += "You win!";
        wins++;
    }
    //Win/loss conversion
    var record = (wins / losses) * 100;
    record = Math.ceil(record * Math.pow(10, 2)) / Math.pow(10, 2);

    //Display results
    panel.innerHTML += "<br>You've played this many games: " + countturns + "<br>";
    panel.innerHTML += "You're win/loss ratio is: " + record + "%<br>";
    panel.innerHTML += "Wins: " + wins + "<br>Losses: " + losses + "<br>";
    panel.innerHTML += "<input id='Button2' type='submit' value='Restart stats'/>";
}