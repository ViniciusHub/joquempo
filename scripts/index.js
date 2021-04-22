const $buttonStonePlayer1 = document.querySelector('.button-stone-player-1')
const $buttonPaperPlayer1 = document.querySelector('.button-paper-player-1')
const $buttonScissorsPlayer1 = document.querySelector('.button-scissors-player-1')
const $windowChoicePlayer1 = document.querySelector('.window-choice-player-1')
const $player1Points = document.querySelector('.player1-points')


const $buttonStonePlayer2 = document.querySelector('.button-stone-player-2')
const $buttonPaperPlayer2 = document.querySelector('.button-paper-player-2')
const $buttonScissorsPlayer2 = document.querySelector('.button-scissors-player-2')
const $windowChoicePlayer2 = document.querySelector('.window-choice-player-2')
const $player2Points = document.querySelector('.player2-points')

const $scoreboardWinner = document.querySelector('.scoreboard-winner')

const $buttonStart = document.querySelector('.button-start')
const $buttonReset = document.querySelector('.button-reset')

let movePlayer1 = ''
let movePlayer2 = ''
let punctuationPlayer1 = 0
let punctuationPlayer2 = 0
let started = false

function verifyWinner() {
    if (movePlayer1 == movePlayer2) {

        setTimeout(function () {
            alert('Empate')
            resetWindow()
            resetVariables()
            gameWinner()
        }, 100)

    } else if (movePlayer1 == 'stone' && movePlayer2 == 'paper') {

        setTimeout(function () {
            alert('Jogadora 2 ganhou a rodada')
            pointPlayer2()
            updateScore()
            resetWindow()
            resetVariables()
            gameWinner()
        }, 100)

    } else if (movePlayer1 == 'stone' && movePlayer2 == 'scissors') {

        setTimeout(function () {
            alert('Jogadora 1 ganhou a rodada')
            pointPlayer1()
            updateScore()
            resetWindow()
            resetVariables()
            gameWinner()
        }, 100)

    } else if (movePlayer1 == 'paper' && movePlayer2 == 'scissors') {

        setTimeout(function () {
            alert('Jogadora 2 ganhou a rodada')
            pointPlayer2()
            updateScore()
            resetWindow()
            resetVariables()
            gameWinner()
        }, 100)

    } else if (movePlayer1 == 'paper' && movePlayer2 == 'stone') {

        setTimeout(function () {
            alert('Jogadora 1 ganhou a rodada')
            pointPlayer1()
            updateScore()
            resetWindow()
            resetVariables()
            gameWinner()
        }, 100)

    } else if (movePlayer1 == 'scissors' && movePlayer2 == 'paper') {

        setTimeout(function () {
            alert('Jogadora 1 ganhou a rodada')
            pointPlayer1()
            updateScore()
            resetWindow()
            resetVariables()
            gameWinner()
        }, 100)

    } else if (movePlayer1 == 'scissors' && movePlayer2 == 'stone') {

        setTimeout(function () {
            alert('Jogadora 2 ganhou a rodada')
            pointPlayer2()
            updateScore()
            resetWindow()
            resetVariables()
            gameWinner()
        }, 100)

    }
}



function resetWindow() {

    $windowChoicePlayer1.innerHTML = ''
    $windowChoicePlayer2.innerHTML = ''
}

function resetVariables() {

    movePlayer1 = ''
    movePlayer2 = ''

}

function resetPunctuation() {

    punctuationPlayer1 = 0
    punctuationPlayer2 = 0
    updateScore()

}

function resetWinner() {

    $scoreboardWinner.innerHTML = 'Aguardando Vencedor'

}

function pointPlayer1() {

    punctuationPlayer1 = (punctuationPlayer1 + 1)

}

function pointPlayer2() {

    punctuationPlayer2 = (punctuationPlayer2 + 1)

}

function updateScore() {

    $player1Points.innerHTML =  '0' + punctuationPlayer1.toString()
    $player2Points.innerHTML =  '0' + punctuationPlayer2.toString()

}


function gameWinner() {

    if(punctuationPlayer1 == 5){

        $scoreboardWinner.innerHTML = 'Jogadora 1 venceu o jogo'
        resetWindow()
        resetVariables()
        resetPunctuation()
        alert('Jogadora 1 ganhou')
        started = false;

    }else if(punctuationPlayer2 == 5){
        
        $scoreboardWinner.innerHTML = 'Jogadora 2 venceu o jogo'
        resetWindow()
        resetVariables()
        resetPunctuation()
        alert('Jogadora 2 ganhou')
        started = false;

    }else{

        resetWinner()

    }

}



$buttonReset.addEventListener('click', function () {

    resetWindow()
    resetVariables()
    resetPunctuation()
    resetWinner()
    started = false;

})

$buttonStart.addEventListener('click', function () {

    started = true;
    resetWinner()

})

$buttonStonePlayer1.addEventListener('click', function () {
    if (started == false) {
        return
    }
    movePlayer1 = 'stone'
    $windowChoicePlayer1.innerHTML = '<img src="./images/pedra.jpeg">'
    verifyWinner()

})

$buttonPaperPlayer1.addEventListener('click', function () {
    if (started == false) {
        return
    }

    movePlayer1 = 'paper'
    $windowChoicePlayer1.innerHTML = '<img src="./images/papel.jpeg">'
    verifyWinner()

})

$buttonScissorsPlayer1.addEventListener('click', function () {
    if (started == false) {
        return
    }

    movePlayer1 = 'scissors'
    $windowChoicePlayer1.innerHTML = '<img src="./images/tesoura.jpeg">'
    verifyWinner()
})

$buttonStonePlayer2.addEventListener('click', function () {
    if (started == false) {
        return
    }

    movePlayer2 = 'stone'
    $windowChoicePlayer2.innerHTML = '<img src="./images/pedra.jpeg">'
    console.log(movePlayer2)
    verifyWinner()
})

$buttonPaperPlayer2.addEventListener('click', function () {
    if (started == false) {
        return
    }

    movePlayer2 = 'paper'
    $windowChoicePlayer2.innerHTML = '<img src="./images/papel.jpeg">'
    console.log(movePlayer2)
    verifyWinner()
})

$buttonScissorsPlayer2.addEventListener('click', function () {
    if (started == false) {
        return
    }

    movePlayer2 = 'scissors'
    $windowChoicePlayer2.innerHTML = '<img src="./images/tesoura.jpeg">'
    console.log(movePlayer2)
    verifyWinner()
})