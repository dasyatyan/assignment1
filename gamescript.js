const flags = [
    { src: 'flags/al.png', country: 'Albania' },
    { src: 'flags/br.png', country: 'Brazil' },
    { src: 'flags/de.png', country: 'Germany' },
    { src: 'flags/eg.png', country: 'Egypt' },
    { src: 'flags/fr.png', country: 'France' },
    { src: 'flags/gr.png', country: 'Greece' },
    { src: 'flags/in.png', country: 'India' },
    { src: 'flags/it.png', country: 'Italy' },
    { src: 'flags/jp.png', country: 'Japan' },
    { src: 'flags/kr.png', country: 'South Korea' },
    { src: 'flags/mx.png', country: 'Mexico' },
    { src: 'flags/ru.png', country: 'Russia' },
    { src: 'flags/sa.png', country: 'Saudi Arabia' },
    { src: 'flags/th.png', country: 'Thailand' },
    { src: 'flags/tr.png', country: 'Turkey' },
    { src: 'flags/gb.png', country: 'United Kingdom' },
    { src: 'flags/us.png', country: 'United States' },
    { src: 'flags/ca.png', country: 'Canada' },
    { src: 'flags/es.png', country: 'Spain' },
    { src: 'flags/za.png', country: 'South Africa' }
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
        modalText.textContent = 'Congratulations! You have all the flags! Here is your promo code: PLS100percent';
    } else {
        document.getElementById('gameOverSound').play(); // Воспроизвести звук при завершении игры без победы
        modalText.textContent = 'Game over! Your score: ' + score + '.  Here is your promo code: PLS100percent';
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