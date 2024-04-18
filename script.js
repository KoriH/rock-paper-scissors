let playerChoice;
let cpuChoice;
let playerScore = 0;
let cpuScore = 0;

const choices = ["rock", "paper", "scissors"];
let cpuBox = document.createElement("p");
let playerBox = document.createElement("p");

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        let timeoutId;
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.style.borderRadius = '10px';
        choice.style.boxShadow = '0px 5px 15px rgba(0, 0, 0, 0.3)';
        choice.addEventListener('mouseenter', function() {
            clearTimeout(timeoutId);
            choice.style.transform = 'scale(1.02)';
        });
        choice.addEventListener('mouseleave', function() {
            choice.style.transform = 'scale(1)';
        });
        choice.addEventListener('click', function() {
            choice.style.transform = 'scale(1.0)'
            timeoutId = setTimeout(function() {
                choice.style.transform = 'scale(1.02)';
            }, 100);
            selectHand(this.id);
        });
        document.getElementById("option").append(choice);
    }

    cpuBox.style.color = "black";
    cpuBox.style.margin = "0px";
    cpuBox.style.fontSize = "30px";

    playerBox.style.color = "black";
    playerBox.style.color = "0px";
    playerBox.style.fontSize = "30px";
    
    document.getElementById("player-score-box").append(playerBox);
    document.getElementById("cpu-score-box").append(cpuBox);
    playerBox.textContent = "" + 0;
    cpuBox.textContent = "" + 0;
}

function selectHand(id) {
    playerChoice = id;
    let img = document.createElement("img")
    img.src = playerChoice + ".png";
    img.style.borderRadius = '6px';
    img.style.width = '170px';
    img.style.height = '170px';
    img.style.margin = '0px';
    let player = document.getElementById("player");
    while(player.firstChild) {
        player.removeChild(player.firstChild);
    }
    document.getElementById("player").append(img);

    cpuChoice = choices[Math.floor(Math.random() * 3)];
    let opp = document.createElement("img");
    opp.src = cpuChoice + ".png";
    opp.style.borderRadius = '6px';
    opp.style.width = '170px';
    opp.style.height = '170px';
    opp.style.margin = '0px';
    let cpu = document.getElementsByClassName("cpu")[0];
    while(cpu.firstChild) {
        cpu.removeChild(cpu.firstChild);
    }
    document.getElementsByClassName("cpu")[0].append(opp);

    if (playerChoice === "rock" && cpuChoice == "scissors") {
        playerScore++;
    } else if (playerChoice === "scissors" && cpuChoice == "paper") {
        playerScore++;
    } else if (playerChoice === "paper" && cpuChoice == "rock") {
        playerScore++;
    } else if (cpuChoice === "rock" && playerChoice == "scissors") {
        cpuScore++;
    } else if (cpuChoice === "scissors" && playerChoice == "paper") {
        cpuScore++;
    } else if (cpuChoice === "paper" && playerChoice == "rock") {
        cpuScore++;
    }

    cpuBox.textContent = "" + cpuScore;

    playerBox.textContent = "" + playerScore;


    console.log(playerScore);
}