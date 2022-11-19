let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Joe",
    chips: 200
}


let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips 

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13) + 1
    if (randomCard === 1){
        return 11
    } else if(randomCard > 10){
        return 10
    }else {
        return randomCard
    }
}


function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]    
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum

    cardsEl.textContent = "Cards: "
    
for(let i = 0; i <cards.length; i++){
    cardsEl.textContent += cards[i] + " " 
}

if(sum <= 20){
    message = "Do you want another card?"
} else if(sum === 21){
    message = "You've got BLACKJACK!"
    hasBlackJack = true
} else{
    message = "You're out of the game"
    isAlive = false
}

messageEl.textContent = message 
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    } 
    else{
        message= "Start a new round to draw a new card"
        messageEl.textContent = message
f    }
}

