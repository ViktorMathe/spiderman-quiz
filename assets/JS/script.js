let body = document.getElementById('body');
let main = document.getElementById('startpage');
let startq = document.getElementById('startq')
let cat = document.getElementById('cat');
let quiz = document.getElementById('quiz');
let welcome = document.getElementById('starting');
let scorenumbers = document.getElementById('scores');
let scorepage = document.getElementById('score-page');
let timer=document.getElementById('timer');
welcome.classList.remove('hide');

let currentQuestion;
let randomQuestions;
let questionsSet;
let questionPool;
let qanswered;
let counter;

function startpage() {
  console.log('Start page')
  welcome.classList.add('hide');
  body.classList.remove('welcome');
  main.classList.remove('hide');
  cat.style.display = 'none';
  quiz.style.display = 'none';
  scorepage.style.display = 'none';
}

function choice() {
  console.log('Category choices')
  main.classList.remove('hide');
  startq.style.display = 'none';
  scorepage.style.display = 'none';
  cat.style.display = 'block';
}

function categories(cats) {
  main.classList.remove('hide');
  cat.style.display = "none";
  scorepage.style.display = 'none';
  quiz.style.display = 'block';

  catchoice = cats;

  startquiz();
}

let questions = [
  [
    ["When was the first Spider-Man comic released?", "1962", "1958", "1948", "1973", "1962"],

    ["Who wrote the most Spider-Man comics?", "Steve Ditko", "Kaare Andrews", "Stan Lee", "Gerard Way", "Stan Lee"],

    ["Who was Spider-Man's stronget enemy?", "Rhino", "Sandman", "Venom", "Doctor Octopus", "Rhino"],

    ["Which is a most popular superhero?", "Iron-Man", "Captain America", "Hulk", "Spider-Man", "Spider-Man"],

    ["What is NOT Peter Parker special ability?", "Enhanced strength", "Reflexes", "Durability", "Flying", "Flying"]
  ],
  [
    ['Which film was starred by Tom Holland?', 'Spider-Man', 'The Amazing Spider-Man', 'Spider-Man 3', 'Spider-Man Homecoming', 'Spider-Man Homecoming'],

    ['When was the fist Spider-Man movie released in the cinemas?', '2012', '2002', '2004', '2017', '2002'],

    ['Who was the villain in the Amazing Spider-Man 2?', 'Lizard', 'Green Goblin and Electro', 'Doctor Octopus', 'Sandman and Venom', "Green Goblin and Electro"],

    ['How many times MJ been captured by a villain?', '4', '3', 'None', '6', '4'],

    ['What is MJ full name in the Tom Holland films?', 'Mary-Jane Wattson', 'Michelle Jones-Wattson', 'Michelle-Jane Wattson', 'None of these', 'Michelle Jones-Wattson'],

  ],
  [
    ['How many Spider-Man game been released from 2000?', '32', '20','4','67', '20' ],

    ['Which console exclusive the most famous Spider-Man game?', 'Microsoft XBOX', 'Nintendo', 'PC', 'PlayStation', 'PlayStation'],

    ['How old is Peter Parker in the Spider-Man (2018) video game?', '16', '29', '23', '33', '23'],

    ['Which else character can you control in the Spider-Man (2018) video game?', 'Aunt May', 'Uncle Ben', 'Otto Octavius', 'MJ', 'MJ'],

    ['Which game has apperance of Spider-Man?', 'Fortnite', 'Call of Duty', 'Battlefield', 'Minecraft', 'Fortnite'],
  ]

];

function choosecat() {
  console.log("Category choosen");
  const fullQuestions = JSON.parse(JSON.stringify(questions));
  if (catchoice === 'comic') {
    questionsSet = fullQuestions[0];
  } else if (catchoice === 'film') {
    questionsSet = fullQuestions[1];
  } else if (catchoice === 'game') {
    questionsSet = fullQuestions[2];
  } else {
    alert("No valid category been chosen");
  }
}



function randomquestions() {
  questionPool = questionsSet.length
  let randomQuestion = Math.floor(Math.random() * questionPool);
  currentQuestion = questionsSet[`${randomQuestion}`];
}



function showquestions(questions) {

  const questiontext = document.getElementById('question');
  questiontext.innerText = currentQuestion[0];

  let answerone = document.getElementById('answer1');
  answerone.innerText = currentQuestion[1];

  const answertwo = document.getElementById('answer2');
  answertwo.innerText = currentQuestion[2];

  const answerthree = document.getElementById('answer3');
  answerthree.innerText = currentQuestion[3];

  const answerfour = document.getElementById('answer4');
  answerfour.innerText = currentQuestion[4];
}

function nextquestion() {
  console.log('Next question');
  if (qanswered < questionPool) {
    questionPool--;
    randomquestions();
    showquestions();
  } else if (qanswered === questionPool) {
    gameover();
  } else {
    alert('There was a problem! Please start again');
  }
  /*showquestions(randomQuestions[currentQuestion]); */


}

function removeAnsweredQ() {
  console.log('Remove answered question');
  let questionshown = questionsSet.currentQuestion;
  questionsSet.splice(questionshown, 0);
}


function startquiz() {
  console.log('Game started');
  choosecat();
  randomquestions();
  showquestions();
  starttimer();
  clearInterval(countdown);
  qanswered = 0;
  scores = 0;
}
function starttimer(){
  timer.innerText = '60 seconds';
  seconds = 60 ;
  counter= setInterval(countdown, 1000);
}
function countdown(){
  seconds--;
  timer.innerText= `${seconds} seconds`;
  if(seconds===0){
    endtimer();
  }
}

function checkanswers(num) {
  console.log('Check answer');
  if (currentQuestion[num] == currentQuestion[5]) {
    console.log('Correct Answer');
    qanswered++;
    scores++;
    scorepush();
  } else {
    console.log('Wrong Answer');
    qanswered++;
  }
  removeAnsweredQ();

  nextquestion();
}

function scorepush() {
  scorenumbers.innerText = `${scores}/5`;
}

function gameover() {
  console.log('Finished the game');
  endscore();
  questionsSet = 0;
}

function endscore() {
  console.log('Shows the results');
  main.classList.remove('hide');
  cat.style.display = "none";
  quiz.style.display = 'none';
  scorepage.style.display = 'block';
}