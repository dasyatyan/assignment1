const flags = [
    { src: 'quizQuestions/q1.png', country: 'Khan Tengri' },
    { src: 'quizQuestions/q2.png', country: 'Big Almaty Lake' },
    { src: 'quizQuestions/q3.png', country: 'Charyn Canyon' },
    { src: 'quizQuestions/q4.png', country: 'Khoja Ahmed Yasawi' },
    { src: 'quizQuestions/q5.png', country: 'Astana' },
    { src: 'quizQuestions/q6.png', country: 'Yurt' },
    { src: 'quizQuestions/q7.png', country: 'Altai Mountains' },
    { src: 'quizQuestions/q8.png', country: 'Balkhash Lake' },
    { src: 'quizQuestions/q9.png', country: 'Mangystau Desert' },
    { src: 'quizQuestions/q10.png', country: 'Dombra' },
];

let currentFlagIndex = 0;
let score = 0;

const flagImg = document.getElementById('flag');
const options = document.querySelectorAll('.option');
const scoreDisplay = document.getElementById('score');
const modal = document.getElementById('game-over-modal');
const modalText = document.getElementById('modal-text');

modal.style.display = 'none';

let shuffledFlags = [...flags];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startGame() {
    shuffleArray(shuffledFlags);
    displayFlag();
}

function displayFlag() {
    if (currentFlagIndex < shuffledFlags.length) {
        flagImg.src = shuffledFlags[currentFlagIndex].src;
        const correctAnswer = Math.floor(Math.random() * 3);
        options[correctAnswer].textContent = shuffledFlags[currentFlagIndex].country;
        for (let i = 0; i < options.length; i++) {
            if (i !== correctAnswer) {
                options[i].textContent = shuffledFlags[i].country;
            }
        }
    } else {
        endGame();
    }
}

function checkAnswer(button) {
    if (button.textContent === shuffledFlags[currentFlagIndex].country) {
        score++;
        document.getElementById('correctSound').play(); // Воспроизвести звук при правильном ответе
    } else {
        document.getElementById('incorrectSound').play(); // Воспроизвести звук при неправильном ответе
    }
    currentFlagIndex++;
    scoreDisplay.textContent = score;
    displayFlag();
}

function endGame() {
    for (const option of options) {
        option.style.display = 'none';
    }

    modal.style.display = 'block';

    if (score === shuffledFlags.length) {
        document.getElementById('gameOverSound').play(); // Воспроизвести звук при завершении игры с победой
        modalText.textContent = 'Congratulations! You have all the flags! Here is your promo code: PLS100Percent';
    } else {
        document.getElementById('gameOverSound').play(); // Воспроизвести звук при завершении игры без победы
        modalText.textContent = 'Game over! Your score: ' + score + '.  Here is your promo code: PLS100Percent';
    }
}


function restartGame() {
    currentFlagIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;
    for (const option of options) {
        option.style.display = 'block';
    }
    shuffleArray(shuffledFlags);
    displayFlag();
    modal.style.display = 'none';
}

function closeGameOverModal() {
    modal.style.display = 'none';
}

document.getElementById('play-again-button').addEventListener('click', function() {
    closeGameOverModal();
    restartGame();
});

startGame();

document.addEventListener("keydown", function (event) {
    if (event.key === "e") {
      window.location.href = "interactive.html";
    }
  });