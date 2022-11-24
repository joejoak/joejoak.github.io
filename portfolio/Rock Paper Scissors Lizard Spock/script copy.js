let yourChoiceEl = document.getElementById("your-choice")
let computerChoiceEl = document.getElementById("computer-choice")
let resultEl = document.getElementById("result")
let winsEl = document.getElementById("ws")
let drawsEl = document.getElementById("ds")
let lossesEl = document.getElementById("ls")

let rock = "Rock"
let paper = "Paper"
let scissors = "Scissors"
let lizard = "Lizard"
let spock = "Spock"

let choices = [rock, paper, scissors, lizard, spock]
let player = null
let computer = null
let game = null

let results = {
    wins: 0,
    draws: 0,
    losses: 0
}

winsEl.textContent = "Wins: " + results.wins
drawsEl.textContent = "Draws: " + results.draws
lossesEl.textContent = "Losses: " + results.losses


// Necesito
// Una función con la que pueda escoger el jugador al picar el botón y que se refleje en el texto
function playerChoice(num){
    player = choices[num]
    yourChoiceEl.textContent = `Your choice: ${player}`
    computerChoice()
}
// La función de escoger en la computadora
function computerChoice(){
    computer = choices[Math.floor(Math.random()*5)]
    computerChoiceEl.textContent = `Computer choice: ${computer}`
    generateResult()
}
// Una función que me de el resultado



function generateResult(){
    if (
        (player === rock && computer === paper) ||
        (player === rock && computer === spock) ||
        (player === paper && computer === scissors) ||
        (player === paper && computer === lizard) ||
        (player === scissors && computer === rock) ||
        (player === scissors && computer === spock) ||
        (player === lizard && computer === rock) ||
        (player === lizard && computer === scissors) ||
        (player === spock && computer === paper) ||
        (player === spock && computer === lizard)
        ) {
            game = "loss"
            printResult(game)
            resultEl.textContent = "Result: Loss"
        }
    else if(
        (player === rock && computer === rock) ||
        (player === paper && computer === paper) ||
        (player === scissors && computer === scissors) ||
        (player === lizard && computer === lizard) ||
        (player === spock && computer === spock)
        ){  
            game = "draw"
            printResult(game)
            resultEl.textContent = "Result: Draw"
        }
    else if(
        (computer === rock && player === paper) ||
        (computer === rock && player === spock) ||
        (computer === paper && player === scissors) ||
        (computer === paper && player === lizard) ||
        (computer === scissors && player === rock) ||
        (computer === scissors && player === spock) ||
        (computer === lizard && player === rock) ||
        (computer === lizard && player === scissors) ||
        (computer === spock && player === paper) ||
        (computer === spock && player === lizard)
        ){
            game = "win"
            printResult(game)
            resultEl.textContent = "Result: Win"
        }
    }
// Un contador de resultados
// // 


function printResult(){
    if(game === "win"){
        results.wins++
        winsEl.textContent = "Wins: " + results.wins
    } else if (game === "draw"){
        results.draws += 1
        drawsEl.textContent = "Draws: " + results.draws

    } else {
        results.losses++
        lossesEl.textContent = "Losses: " + results.losses
    }

}