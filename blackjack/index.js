let player = {
    name: "Migliore",
    chips: 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function setNominationAndValueToCard(cardNomination, cardValue) {
    return cardWithValue = {
        nomination: cardNomination,
        value: cardValue
    }
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    switch (randomNumber) {
        case 1:
            return setNominationAndValueToCard("A", 11)
        case 2:
            return setNominationAndValueToCard("2", 2)
        case 3:
            return setNominationAndValueToCard("3", 3)
        case 4:
            return setNominationAndValueToCard("4", 4)
        case 5:
            return setNominationAndValueToCard("5", 5)
        case 6:
            return setNominationAndValueToCard("6", 6)
        case 7:
            return setNominationAndValueToCard("7", 7)
        case 8:
            return setNominationAndValueToCard("8", 8)
        case 9:
            return setNominationAndValueToCard("9", 9)
        case 10:
            return setNominationAndValueToCard("10", 10)
        case 11:
            return setNominationAndValueToCard("J", 10)
        case 12:
            return setNominationAndValueToCard("Q", 10)
        case 13:
            return setNominationAndValueToCard("K", 10)
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    if (secondCard === firstCard) {
        secondCard = getRandomCard()
    }
    cards = [firstCard.nomination, secondCard.nomination]
    sum = firstCard.value + secondCard.value
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Карты: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Сумма: " + sum
    if (sum <= 20) {
        message = "Хотите взять ещё карту?"
    } else if (sum === 21) {
        message = "Повезло! Вы собрали блэкджек!"
        hasBlackJack = true
    } else {
        message = "Вы проиграли!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card.value
        cards.push(card.nomination)
        renderGame()
    }
}
