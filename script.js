
// Game data
const questions = [
  {
    text: "Gule, orange og gyldne flag i Europa?",
    answers: {
      "tyskland": 78,
      "spanien": 66,
      "sverige": 65,
      "belgien": 45,
      "rumænien": 17,
      "portugal": 17,
      "irland": 11,
      "nordmakedonien": 10,
      "litauen": 8,
      "andorra": 7,
      "ukraine": 6,
      "kroatien": 3,
      "moldova": 3,
      "cypern": 2,
      "bosnien-hercegovina": 1,
      "liechtenstein": 1,
      "san marino": 1,
      "montenegro": 0,
      "serbien": 0,
      "slovenien": 0
    }
  },
  // {
  //   text: "Højt fra træets grønne top - ord i julesangen på seks bogstaver eller over?",
  //   answers: {
  //     "juleglansen": 73,
  //     "spillemand": 62,
  //     "stråler": 60,
  //     "lystigt": 45,
  //     "dansen": 38,
  //     "begynder": 32,
  //     "grønne": 28,
  //     "spises": 26,
  //     "trommen": 26,
  //     "træets": 22,
  //     "hænger": 16,
  //     "traktere": 16,
  //     "køkkenet": 14,
  //     "børnlil": 12,
  //     "julegave": 11,
  //     "tromme": 11,
  //     "garnet": 9,
  //     "længer": 8,
  //     "fændrik": 7,
  //     "strammer": 7,
  //     "barnet": 6,
  //     "hvorpå": 6,
  //     "kommer": 5,
  //     "kvæler": 5,
  //     "merino": 5,
  //     "forstår": 4,
  //     "koster": 4,
  //     "vinterfrakke": 4,
  //     "strikke": 3,
  //     "ønsker": 3,
  //     "bedstefar": 2,
  //     "bleven": 2,
  //     "henrik": 2,
  //     "propert": 2,
  //     "ryster": 2,
  //     "dannebrog": 1,
  //     "datter": 1,
  //     "engang": 1,
  //     "respekt": 1,
  //     "sparer": 1,
  //     "allerbedste": 0,
  //     "blanke": 0,
  //     "bliver": 0,
  //     "dejlig": 0,
  //     "derfor": 0,
  //     "forsigtig": 0,
  //     "guldpapir": 0,
  //     "indenfor": 0,
  //     "kramme": 0,
  //     "sikken": 0,
  //     "skylder": 0,
  //     "svinger": 0,
  //     "william": 0
  //   }
  // },
  // {
  //   text: "Kageingrediens i gulerodskage, brunsviger og drømmekage fra Brovst ", // ifølge 'Frøken Jensens kogebog' og 'God mad - let at lave'
  //   answers: {
  //     "hvedemel": 93,
  //     "sukker": 79,
  //     "brun farin": 75,
  //     "gulerod": 71,
  //     "smør": 63,
  //     "æg": 63,
  //     "kokosmel": 51,
  //     "mælk": 38,
  //     "bagepulver": 37,
  //     "gær": 33,
  //     "salt": 15,
  //     "kanel": 13,
  //     "vand": 10,
  //     "flormelis": 9,
  //     "flødeost": 7,
  //     "natron": 7,
  //     "vaniljesukker": 7,
  //     "vanilje": 6,
  //     "rosiner": 5,
  //     "hakkede nødder": 4,
  //     "kardemomme": 4,
  //     "havregryn": 2,
  //     "vindruekerneolie": 2,
  //     "citron": 1,
  //     "creme fraiche": 0,
  //     "hasselnøddekerner": 0,
  //     "ingefær": 0,
  //     "mandler": 0,
  //     "nellike": 0,
  //     "valnøddekerner": 0,
  //     "yoghurt": 0
  //   }
  // }
];

const teamnames = ["Hold111", "Hold 2", "Hold 3", "Hold 4"];

let currentQuestionIndex = 0;
let numberAnswered = 0;
const scores = [0, 0, 0, 0];
const questionText = document.getElementById("question-text");
const answer = document.getElementById("answer")
const submitButton = document.getElementById("submit-answers");
const nextButton = document.getElementById("next-question");
const meterBar = document.getElementById("meter-bar");
const playerScores = document.getElementById("player-scores");
const countdownDisplay = document.getElementById("countdown-number");
const winnerContainer = document.getElementById("winner-container");
const winnerText = document.getElementById("winner-text");

// const animationSound = document.getElementById('animation-sound');
// const wrongSound = document.getElementById('wrong-sound');
const animationSound = new Audio('nedad.m4a');
const wrongSound = new Audio('forkert.m4a');
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const player3 = document.getElementById("player3");
const player4 = document.getElementById("player4");
const players = [player1, player2, player3, player4];

const winner1 = document.getElementById("winner-photo1");
const winner2 = document.getElementById("winner-photo2");
const winner3 = document.getElementById("winner-photo3");
const winner4 = document.getElementById("winner-photo4");
const winners = [winner1, winner2, winner3, winner4];

const teamname = document.getElementById("teamname");
const zeroScoreButton = document.getElementById("show-zero-scores");
let playerOrder = []; // Stores the randomized order of players
let currentPlayerIndex = 0; // Index in the shuffled order


//function to shuffle the players
function shufflePlayers() {
  playerOrder = [0, 1, 2, 3];
  for (let i = playerOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [playerOrder[i], playerOrder[j]] = [playerOrder[j], playerOrder[i]];
  }
}

// Function to display zero-score answers
function showZeroScoreAnswers() {
  const question = questions[currentQuestionIndex];

  // Get all answers with a score of 0
  const zeroScoreAnswers = Object.keys(question.answers).filter(
    answer => question.answers[answer] === 0
  );

  // Display the zero-score answers
  if (zeroScoreAnswers.length > 0) {
    alert("Nulpoint-svar 0:\n" + zeroScoreAnswers.join(", "));
  } else {
    alert("Ingen nulpoint-svar");
  }
}

// Attach the function to the button
zeroScoreButton.addEventListener("click", showZeroScoreAnswers);

function startGame() {
  currentQuestionIndex = 0;
  scores.fill(0);
  shufflePlayers();
  hideAllExceptPlayer(playerOrder[currentPlayerIndex]);
  winnerContainer.style.display = "none";
  document.getElementById("game").style.display = "block";
  showQuestion();
  updateScores();
}
function hideAllExceptPlayer(player) {
  for (let i = 0; i < players.length; i++) {
    if (i === player) {
      players[i].style.display = "flex";
    } else {
      players[i].style.display = "none";
    }
  }
  teamname.innerText = teamnames[player];
}

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionText.innerText = question.text;
  answer.value = "";
  answer.focus();
  meterBar.style.height = "100%"; // Reset the meter to full height (top to bottom)
  countdownDisplay.innerText = "100"; // Reset countdown
  nextButton.style.display = "none"; // Hide next question button
}

function changePlayer() {
  meterBar.style.height = "100%"; // Reset the meter to full height (top to bottom)
  countdownDisplay.innerText = "100"; // Reset countdown
  hideAllExceptPlayer(playerOrder[currentPlayerIndex]);
  //change back to linear-gradient(to top, #ff9900, #ff0000)
  meterBar.style.background = "linear-gradient(to top, #ff9900, #ff0000)";
  answer.value = "";
  // remove "hidden" from submit button and answer field
  submitButton.style.visibility = "visible";
  answer.style.visibility = "visible";
}

function submitAnswer() {
  const question = questions[currentQuestionIndex];
  const answertext = answer.value.trim().toLowerCase();
  const score = question.answers[answertext]; // Look up the answer in the question's answers
  // hide submit button and answer field
  submitButton.style.visibility = "hidden";
  answer.style.visibility = "hidden";
  if (score !== undefined) {
    // Correct answer
    animationSound.play();
    animateMeter(score, () => {
      processScore(score);
      currentPlayerIndex = (currentPlayerIndex + 1) % 4;
      setTimeout(changePlayer, 3000); // Delay of 3 seconds before changing player
    });
  } else {
    // Incorrect answer
    meterBar.style.background = "red";
    countdownDisplay.innerText = "UPSSI, Det var forkert " + teamnames[playerOrder[currentPlayerIndex]];
    processScore(100);
    wrongSound.play();
    currentPlayerIndex = (currentPlayerIndex + 1) % 4;
    setTimeout(changePlayer, 3000); // Delay of 3 seconds before changing player
  }
}

answer.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitAnswer();
  }
});

function animateMeter(score, callback) {
  const meterBar = document.getElementById('meter-bar');
  const countdownDisplay = document.getElementById('countdown-number');
  const barFullHeight = meterBar.parentElement.offsetHeight; // Get the actual pixel height of the bar container
  const targetHeight = barFullHeight / 100 * score; // Calculate the target height in pixels
  let currentHeight = barFullHeight; // Start the height from the full height (100%)
  let currentNumber = 100; // Start the countdown from 100


  const interval = setInterval(() => {
    currentHeight -= barFullHeight / 100; // Decrease bar height by 1% of the full height
    currentNumber -= 1; // Decrease the countdown number

    // Calculate the color based on the current progress
    const percentage = (currentHeight / barFullHeight) * 100;
    const color = `rgb(${255 - Math.floor(255 * (percentage / 100))}, ${Math.floor(165 * (percentage / 100))}, 0)`;

    meterBar.style.height = `${currentHeight}px`; // Update the bar's height (going downwards)
    meterBar.style.backgroundColor = color; // Update the bar's background color
    countdownDisplay.innerText = currentNumber; // Update the number display

    // Slow down the audio towards the end
    if (currentHeight <= barFullHeight / 3 && animationSound.playbackRate != 0.6) {
      animationSound.playbackRate = 0.6;
    }
    if (currentHeight <= targetHeight) {
      clearInterval(interval);
      meterBar.style.height = `${targetHeight}px`; // Ensure the bar stops precisely
      countdownDisplay.innerText = score; // Set the number to the final score
      animationSound.pause(); // Stop the sound
      animationSound.currentTime = 0; // Reset the sound to the beginning
      animationSound.playbackRate = 1; // Reset the playback rate
      if (callback) callback(); // Call the callback function if provided
    }
  }, 120); // Adjust the interval time as needed

}

function processScore(score) {
  const playerNum = playerOrder[currentPlayerIndex];
  scores[playerNum] += score; // Update score for the current player
  if (currentPlayerIndex >= 3) {
    nextButton.style.display = "inline";
    zeroScoreButton.style.display = "inline";
  }
  updateScores();
}

function updateScores() {
  playerScores.innerText = `${teamnames[0]}: ${scores[0]} | ${teamnames[1]}: ${scores[1]} | ${teamnames[2]}: ${scores[2]} | ${teamnames[3]}: ${scores[3]}`;
}

function nextQuestion() {
  currentQuestionIndex++;
  shufflePlayers();
  if (currentQuestionIndex >= questions.length) {
    endGame();
  } else {
    showQuestion();
    zeroScoreButton.style.display = "none";
    currentPlayerIndex = 0;
    hideAllExceptPlayer(playerOrder[currentPlayerIndex]);
  }
}

function endGame() {
  document.getElementById("game").style.display = "none";
  winnerContainer.style.display = "block";
  const lowestScore = Math.min(...scores);
  const winningTeam = teamnames[scores.indexOf(lowestScore)];
  winnerText.innerText = `Vinderholdet er ${winningTeam} med ${lowestScore} point!`;
  //show the winner picture (player index)
  winners[scores.indexOf(lowestScore)].style.display = "block";
}

// Start the game on load
startGame();
