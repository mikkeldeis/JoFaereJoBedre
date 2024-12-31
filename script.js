
// Game data
const questions = [
  {
    text: "Pigenavne i 90'erne",
    answers: {
      "emma": 27,
      "anna": 23,
      "sofia": 23,
      "camilla": 20,
      "anne": 17,
      "louise": 17,
      "mette": 16,
      "christina": 15,
      "laura": 15,
      "katrine": 13,
      "cecilie": 11,
      "josefine": 11,
      "maria": 11,
      "marie": 11,
      "sarah": 11,
      "ida": 9,
      "amalie": 8,
      "emilie": 8,
      "nanna": 8,
      "simone": 8,
      "caroline": 7,
      "christine": 7,
      "julie": 7,
      "mathilde": 7,
      "mia": 7,
      "clara": 6,
      "line": 6,
      "maja": 5,
      "rikke": 5,
      "signe": 5,
      "carina": 4,
      "charlotte": 4,
      "malene": 4,
      "mie": 4,
      "amanda": 3,
      "anja": 3,
      "freja": 3,
      "nicoline": 3,
      "stine": 3,
      "alberte": 2,
      "frederikke": 2,
      "lærke": 2,
      "michelle": 2,
      "astrid": 1,
      "helena": 1,
      "helene": 1,
      "jasmin": 1,
      "johanne": 1,
      "nadia": 1,
      "natascha": 1,
      "nina": 1,
      "pernille": 1,
      "rebecca": 1,
      "stephanie": 1,
      "trine": 1,
      "victoria": 1,
      "ditte": 0,
      "isabella": 0,
      "katja": 0,
      "sabrina": 0,
      "sandra": 0,
      "thea": 0
    }
  },
  {
    text: "Lande med gul, orange eller gyldne farver i deres flag i Europa?", //medlem af FN
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
  {
    text: "Ord i julesangen 'Højt fra træets grønne top' på seks eller flere bogstaver?",
    answers: {
      "juleglansen": 73,
      "spillemand": 62,
      "stråler": 60,
      "lystigt": 45,
      "dansen": 38,
      "begynder": 32,
      "grønne": 28,
      "spises": 26,
      "trommen": 26,
      "træets": 22,
      "hænger": 16,
      "traktere": 16,
      "køkkenet": 14,
      "børnlil": 12,
      "julegave": 11,
      "tromme": 11,
      "garnet": 9,
      "længer": 8,
      "fændrik": 7,
      "strammer": 7,
      "barnet": 6,
      "hvorpå": 6,
      "kommer": 5,
      "kvæler": 5,
      "merino": 5,
      "forstår": 4,
      "koster": 4,
      "vinterfrakke": 4,
      "strikke": 3,
      "ønsker": 3,
      "bedstefar": 2,
      "bleven": 2,
      "henrik": 2,
      "propert": 2,
      "ryster": 2,
      "dannebrog": 1,
      "datter": 1,
      "engang": 1,
      "respekt": 1,
      "sparer": 1,
      "allerbedste": 0,
      "blanke": 0,
      "bliver": 0,
      "dejlig": 0,
      "derfor": 0,
      "forsigtig": 0,
      "guldpapir": 0,
      "indenfor": 0,
      "kramme": 0,
      "sikken": 0,
      "skylder": 0,
      "svinger": 0,
      "william": 0
    }
  },
  {
    text: "Ingredienser i gløgg og æbleskiver?", // ifølge "valdemars ro"
    answers: {
      "rødvin": 82,
      "hvedemel": 82,
      "rosiner": 67,
      "mandler": 62,
      "æg": 57,
      "sukker": 51,
      "flormelis": 34,
      "marmelade": 34,
      "smør": 28,
      "kardemomme": 27,
      "bagepulver": 23,
      "kærnemælk": 19,
      "nelliker": 16,
      "kanelstænger": 14,
      "rom": 13,
      "citron": 10,
      "vaniljestang": 7,
      "natron": 7,
      "salt": 6,
      "snaps": 5,
      "appelsin": 4,
      "citronskal": 3,
      "allehånde": 1,
      "appelsinjuice": 1,
      "portvin": 1,
      "ingefær": 0,
      "kardemommekapsler": 0,
      "lakridsrod": 0,
      "muscovadosukker": 0,
      "muskatnød": 0,
      "mørk rom": 0,
      "peberkorn": 0,
      "stjerneanis": 0
    }
  },
  {
    text: "Lande med -ien eller -iet?",
    answers: {
      "spanien": 58,
      "italien": 56,
      "tyrkiet": 47,
      "tjekkiet": 40,
      "slovakiet": 35,
      "slovenien": 30,
      "kroatien": 28,
      "belgien": 23,
      "indien": 21,
      "mongoliet": 19,
      "rumænien": 17,
      "serbien": 17,
      "albanien": 16,
      "algeriet": 16,
      "bulgarien": 14,
      "australien": 11,
      "brasilien": 11,
      "armenien": 7,
      "etiopien": 7,
      "indonesien": 7,
      "syrien": 7,
      "tunesien": 4,
      "georgien": 3,
      "storbritannien": 3,
      "saudi-arabien": 2,
      "mauretanien": 0,
      "mikronesien": 0,
      "nordmakedonien": 0
    }
  },
  {
    text: "Partier på stemmesedlen?",
    answers: {
      "socialdemokraterne": 94,
      "venstre": 91,
      "socialistisk folkeparti": 79,
      "det konservative folkeparti": 76,
      "dansk folkeparti": 64,
      "det radikale venstre": 64,
      "enhedslisten": 56,
      "nye borgerlige": 38,
      "centrum-demokraterne": 36,
      "liberal alliance": 36,
      "moderaterne": 35,
      "danmarks kommunistiske parti": 31,
      "kristendemokraterne": 28,
      "danmarksdemokraterne": 27,
      "fremskridtspartiet": 27,
      "venstresocialisterne": 26,
      "alternativet": 22,
      "danmarks retsforbund": 20,
      "fælles kurs": 9,
      "de grønne": 7,
      "stram kurs": 6,
      "de uafhængige": 5,
      "frie grønne": 4,
      "klaus riskær pedersen": 2,
      "det humanistiske parti": 1,
      "internationalen - socialistisk arbejderparti": 1,
      "kommunistisk arbejderparti": 1,
      "dansk samling": 0,
      "demokratisk fornyelse": 0,
      "liberalt centrum": 0,
      "marxistisk-leninistisk parti": 0,
      "minoritetspartiet": 0,
      "pensionistpartiet": 0
    }
  },
  {
    text: "Drinks?",
    answers: {
      "bloody mary": 30,
      "mojito": 24,
      "black russian": 18,
      "white russian": 18,
      "screwdriver": 16,
      "sex on the beach": 16,
      "cosmopolitan": 15,
      "piña colada": 15,
      "daiquiri": 14,
      "long island ice tea": 14,
      "manhattan": 14,
      "tequila sunrise": 11,
      "john collins": 8,
      "tom collins": 8,
      "dry martini": 7,
      "margarita": 7,
      "singapore sling": 7,
      "cuba libre": 6,
      "whiskey sour": 6,
      "espresso martini": 5,
      "old fashioned": 5,
      "dark n stormy": 4,
      "gin fizz": 4,
      "moscow mule": 4,
      "negroni": 4,
      "harvey wallbanger": 3,
      "spritz": 3,
      "caipirinha": 2,
      "irish coffee": 2,
      "white lady": 2,
      "b-52": 1,
      "bellini": 1,
      "bramble": 1,
      "dirty martini": 1,
      "kir": 1,
      "mai-tai": 1,
      "mimosa": 1,
      "mint julep": 1,
      "sidecar": 1,
      "alexander": 0,
      "americano": 0,
      "angel face": 0,
      "aviation": 0,
      "bacardi": 0,
      "barracuda": 0,
      "bee's knees": 0,
      "between the sheets": 0,
      "boulevardier": 0,
      "brandy crusta": 0,
      "canchanchara": 0,
      "casino": 0,
      "champagne cocktail": 0,
      "clover club": 0,
      "corpse reviver #2": 0,
      "derby": 0,
      "fernandito": 0,
      "french 75": 0,
      "french connection": 0,
      "french martini": 0,
      "godfather": 0,
      "godmother": 0,
      "golden dream": 0,
      "grasshopper": 0,
      "hanky panky": 0,
      "hemingway special": 0,
      "horse's neck": 0,
      "illegal": 0,
      "kamikaze": 0,
      "last word": 0,
      "lemon drop martini": 0,
      "martinez": 0,
      "mary pickford": 0,
      "monkey gland": 0,
      "naked and famous": 0,
      "new york sour": 0,
      "old cuban": 0,
      "paloma": 0,
      "paper plane": 0,
      "paradise": 0,
      "penicillin": 0,
      "pisco sour": 0,
      "planter's punch": 0,
      "porto flip": 0,
      "ramos fizz": 0,
      "rose": 0,
      "russian spring punch": 0,
      "rusty nail": 0,
      "sazerac": 0,
      "sea breeze": 0,
      "southside": 0,
      "spicy fifty": 0,
      "stinger": 0,
      "suffering bastard": 0,
      "tipperary": 0,
      "tommy's margarita": 0,
      "trinidad sour": 0,
      "tuxedo": 0,
      "vampiro": 0,
      "ve.n.to": 0,
      "vesper": 0,
      "vieux carré": 0,
      "yellow bird": 0,
      "zombie": 0
    }
  },
];

const teamnames = [];

let currentQuestionIndex = 0;
let numberAnswered = 0;
const scores = [];
const questionText = document.getElementById("question-text");
const answer = document.getElementById("answer");
const submitButton = document.getElementById("submit-answers");
const nextButton = document.getElementById("next-question");
const meterBar = document.getElementById("meter-bar");
const playerScores = document.getElementById("player-scores");
const countdownDisplay = document.getElementById("countdown-number");
const winnerContainer = document.getElementById("winner-container");
const winnerText = document.getElementById("winner-text");
const teamInputs = document.getElementById('team-inputs');
const startScreen = document.getElementById('start-screen');
const teamSelect = document.getElementById('team-selector');

const animationSound = new Audio('sounds/nedad.m4a');
const wrongSound = new Audio('sounds/forkert.m4a');
const zeroPointSound = new Audio('sounds/0point.m4a');
const endSound = new Audio('sounds/doom.m4a');


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


function generateForms() {
  const teamSelector = document.getElementById('team-selector');
  const numberOfTeams = parseInt(teamSelector.value);
  teamInputs.innerHTML = ''; // Clear existing inputs
  for (let i = 0; i < numberOfTeams; i++) {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'team-name';
    newInput.placeholder = 'Holdnavn ' + (i + 1);
    teamInputs.appendChild(newInput);
  }
}
function getTeamnames() {
  teamnames.length = 0;
  const teamInputsDiv = document.getElementById('team-inputs');
  const teamInputs = teamInputsDiv.getElementsByTagName('input');
  for (let i = 0; i < teamInputs.length; i++) {
    teamnames[i] = teamInputs[i].value.trim();
  }
  if (teamnames.includes('')) {
    alert('Du skal udfylde alle holdnavne');
  } else {
    startScreen.style.display = "none";
    document.body.classList.remove('start-screen-active');
    startGame();
  }
}

document.getElementById('start-game').addEventListener('click', function () {
  getTeamnames();
});

function startGame() {
  currentQuestionIndex = 0;
  for (let i = 0; i < teamnames.length; i++) {
    scores[i] = 0;
  }
  shufflePlayers();
  hideAllExceptPlayer(playerOrder[currentPlayerIndex]);
  document.getElementById("game").style.display = "block";
  showQuestion();
  updateScores();
}

function shufflePlayers() {
  playerOrder = [];
  for (let i = 0; i < teamnames.length; i++) {
    playerOrder.push(i);
  }
  for (let i = playerOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [playerOrder[i], playerOrder[j]] = [playerOrder[j], playerOrder[i]];
  }
}

function showZeroScoreAnswers() {
  const question = questions[currentQuestionIndex];
  const zeroScoreAnswers = Object.keys(question.answers).filter(
    answer => question.answers[answer] === 0
  );
  if (zeroScoreAnswers.length > 0) {
    alert("Nulpoint-svar 0:\n" + zeroScoreAnswers.join(", "));
  } else {
    alert("Ingen nulpoint-svar");
  }
}

zeroScoreButton.addEventListener("click", showZeroScoreAnswers);

function hideAllExceptPlayer(player) {
  for (let i = 0; i < players.length; i++) {
    players[i].style.display = i === player ? "flex" : "none";
  }
  teamname.innerText = teamnames[player];
}

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionText.innerText = question.text;
  answer.value = "";
  answer.focus();
  meterBar.style.height = "100%";
  countdownDisplay.innerText = "100";
  nextButton.style.display = "none";
}

function changePlayer() {
  meterBar.style.height = "100%";
  countdownDisplay.innerText = "100";
  hideAllExceptPlayer(playerOrder[currentPlayerIndex]);
  meterBar.style.background = "linear-gradient(to top, #ff9900, #ff0000)";
  answer.value = "";
  submitButton.style.visibility = "visible";
  answer.style.visibility = "visible";
}

function submitAnswer() {
  const question = questions[currentQuestionIndex];
  const answertext = answer.value.trim().toLowerCase();
  const score = question.answers[answertext];
  submitButton.style.visibility = "hidden";
  answer.style.visibility = "hidden";
  if (score !== undefined) {
    animationSound.play();
    animateMeter(score, () => {
      endSound.play();
      processScore(score);
      currentPlayerIndex = (currentPlayerIndex + 1) % teamnames.length;
      setTimeout(changePlayer, 3000);
    });
  } else {
    meterBar.style.background = "red";
    countdownDisplay.innerText = `UPSSI, Det var forkert ${teamnames[playerOrder[currentPlayerIndex]]}`;
    processScore(100);
    wrongSound.play();
    currentPlayerIndex = (currentPlayerIndex + 1) % teamnames.length;
    setTimeout(changePlayer, 3000);
  }
}

answer.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitAnswer();
  }
});

function animateMeter(score, callback) {
  const barFullHeight = meterBar.parentElement.offsetHeight;
  const targetHeight = (barFullHeight / 100) * score;
  let currentHeight = barFullHeight;
  let currentNumber = 100;

  const interval = setInterval(() => {
    currentHeight -= barFullHeight / 100;
    currentNumber -= 1;

    const percentage = (currentHeight / barFullHeight) * 100;
    const color = `rgb(${255 - Math.floor(255 * (percentage / 100))}, ${Math.floor(165 * (percentage / 100))}, 0)`;

    meterBar.style.height = `${currentHeight}px`;
    meterBar.style.backgroundColor = color;
    countdownDisplay.innerText = currentNumber;

    if (currentHeight <= barFullHeight / 3 && animationSound.playbackRate !== 0.6) {
      animationSound.playbackRate = 0.6;
    }
    if (currentHeight <= targetHeight) {
      clearInterval(interval);
      meterBar.style.height = `${targetHeight}px`;
      countdownDisplay.innerText = score;
      animationSound.pause();
      animationSound.currentTime = 0;
      animationSound.playbackRate = 1;
      if (callback) callback();
    }
  }, 120);
}

function processScore(score) {
  if (score === 0) {
    zeroPointSound.play();

    // Display flashing "NULPOINTER!! giv shot"
    const flashMessage = document.createElement("div");
    flashMessage.innerText = "NULPOINTER!! giv shot";
    flashMessage.style.position = "absolute";
    flashMessage.style.top = "50%";
    flashMessage.style.left = "50%";
    flashMessage.style.transform = "translate(-50%, -50%)";
    flashMessage.style.color = "white";
    flashMessage.style.fontSize = "2rem";
    flashMessage.style.fontWeight = "bold";
    flashMessage.style.textAlign = "center";
    flashMessage.style.animation = "flash 1s infinite";
    document.body.appendChild(flashMessage);

    setTimeout(() => {
      document.body.removeChild(flashMessage);
    }, 3000);
  } else {
    scores[playerOrder[currentPlayerIndex]] += score;
    updateScores();
  }

  // Check if it's the last player in the current round
  if (currentPlayerIndex === teamnames.length - 1) {
    nextButton.style.display = "inline";
    zeroScoreButton.style.display = "inline";
  }
}

function updateScores() {
  let scoreText = teamnames.map((team, i) => `${team}: ${scores[i]}`).join(" | ");
  playerScores.innerText = scoreText;
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
  winners[scores.indexOf(lowestScore)].style.display = "block";
}
