// Setting the initial scores for both the user and the computer.   
let userScore = 0;
let computerScore = 0;

// Caching the DOM i.e storing all the elements in the variables for future use.
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Function to get the computer choice.
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

// Function to convert the letters 'r', 'p', 's' to their respective full forms.
function convertToWord(letter) {
    if (letter === "r") {
        return "Rock";
    }
    if (letter === "p") {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

// Creating win, lose and draw functions which will be called depending upon the choices.
function win(userChoice, computerChoice) {
    userScore++;

    if (userScore === 3) {
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = `You won! Refresh to play again or wait for few seconds.`;
        let flag = 1;
        if (flag == 1) {
            setTimeout(function () {
                userScore = 0;
                computerScore = 0;
                userScore_span.innerHTML = 0;
                computerScore_span.innerHTML = 0;
                result_p.innerHTML = `Play again to win!`;
            }, 5000)
        }
    }

    else {
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;

        const userChoice_div = document.getElementById(userChoice); // Storing the div which the user has clicked on.

        result_p.innerHTML = `You chose ${convertToWord(userChoice)} and the computer chose ${convertToWord(computerChoice)}. You scored!`;

        userChoice_div.classList.add('green-border'); // Adding the class for the border.
        setTimeout(function () {
            userChoice_div.classList.remove('green-border') // Removing the class after 500ms, i.e 0.5s.
        }, 500)
    }



}

function lose(userChoice, computerChoice) {
    computerScore++;

    if (computerScore === 3) {
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = `You lost! Refresh to play again or wait for few seconds.`;
        let flag = 1;
        if (flag == 1) {
            setTimeout(function () {
                userScore = 0;
                computerScore = 0;
                userScore_span.innerHTML = 0;
                computerScore_span.innerHTML = 0;
                result_p.innerHTML = `Play again to win!`;
            }, 5000)
        }
    }
    else {
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;

        const userChoice_div = document.getElementById(userChoice); // Storing the div which the user has clicked on.

        result_p.innerHTML = `You chose ${convertToWord(userChoice)} and the computer chose ${convertToWord(computerChoice)}. Computer scored!`;

        userChoice_div.classList.add('red-border'); // Adding the class for the border.
        setTimeout(function () {
            userChoice_div.classList.remove('red-border') // Removing the class after 500ms, i.e 0.5s.
        }, 500)
    }

}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice); // Storing the div which the user has clicked on.

    result_p.innerHTML = `You chose ${convertToWord(userChoice)} and the computer also chose ${convertToWord(computerChoice)}. It's a draw!`;

    userChoice_div.classList.add('grey-border'); // Adding the class for the border.
    setTimeout(function () {
        userChoice_div.classList.remove('grey-border') // Removing the class after 500ms, i.e 0.5s.
    }, 500)
}

// Function to compare the user's and the computer's choice using switch statement.
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

// Function to add event listeners to all the clickable items.
function main() {
    rock_div.addEventListener('click', () => {
        game("r");
    })

    paper_div.addEventListener('click', () => {
        game("p");
    })

    scissors_div.addEventListener('click', () => {
        game("s");
    })
}
main();
