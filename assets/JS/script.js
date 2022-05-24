let body = document.getElementById('body');
let main = document.getElementById('startpage');
let startq = document.getElementById('startq')
let cat = document.getElementById('cat');
let quiz = document.getElementById('quiz');
let welcome = document.getElementById('starting');
let scorenumbers = document.getElementById('scores');
let scorepage = document.getElementById('score-page');
let timer = document.getElementById('timer');
welcome.classList.remove('hide');

let currentQuestion;
let randomQuestions;
let questionsSet;
let questionPool;
let qanswered;
let counter;

function navigation(){
  cat.style.display='none';
  quiz.style.display='none';
  scorepage.style.display='none';
  clearInterval(counter);
  seconds = 60;
}

function startpage() {
  console.log('Start page')
  welcome.classList.add('hide');
  body.classList.remove('welcome');
  main.classList.remove('hide');
  startq.style.display='block';
  navigation();
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

    ["Who was Spider-Man's strongest enemy?", "Rhino", "Sandman", "Venom", "Doctor Octopus", "Rhino"],

    ["Who is the most popular superhero?", "Iron-Man", "Captain America", "Hulk", "Spider-Man", "Spider-Man"],

    ["Which of these is NOT Peter Parker's special ability?", "Enhanced strength", "Reflexes", "Durability", "Flying", "Flying"]
  ],
  [
    ['Which film starred Tom Holland?', 'Spider-Man', 'The Amazing Spider-Man', 'Spider-Man 3', 'Spider-Man Homecoming', 'Spider-Man Homecoming'],

    ['When was the fist Spider-Man movie released in the cinema?', '2012', '2002', '2004', '2017', '2002'],

    ['Who was the villain in the Amazing Spider-Man 2?', 'Lizard', 'Green Goblin and Electro', 'Doctor Octopus', 'Sandman and Venom', "Green Goblin and Electro"],

    ['How many times has MJ been captured by a villain?', '4', '3', 'None', '6', '4'],

    ["What is MJ's full name in the films that Tom Holland starred in?", 'Mary-Jane Wattson', 'Michelle Jones-Wattson', 'Michelle-Jane Wattson', 'None of these', 'Michelle Jones-Wattson'],

  ],
  [
    ['How many Spider-Man games have been released since 2000?', '32', '20', '4', '67', '20'],

    ['Which console has the exclusive right to the most famous Spider-Man game?', 'Microsoft XBOX', 'Nintendo', 'PC', 'PlayStation', 'PlayStation'],

    ['How old is Peter Parker in Spider-Man (2018) video game?', '16', '29', '23', '33', '23'],

    ['What character can you control in the Spider-Man (2018) video game?', 'Aunt May', 'Uncle Ben', 'Otto Octavius', 'MJ', 'MJ'],

    ['Which game has Spider-Man appeared in?', 'Fortnite', 'Call of Duty', 'Battlefield', 'Minecraft', 'Fortnite'],
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

function starttimer() {
  timer.innerHTML = '60 seconds';
  seconds = 60;
  counter = setInterval(countdown, 1000);
}

function countdown() {
  seconds--;
  timer.innerHTML = `Time left: ${seconds} seconds`;
  if (seconds === 0) {
    endtimer();
  }
}

function endtimer() {
  alert('You are out of time!');
  gameover();
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
  scorenumbers.innerHTML = `Score: ${scores}/5`;
}

function gameover() {
  console.log('Finished the game');
  clearInterval(counter);
  endscore();
  questionsSet = 0;
}

function endscore() {
  console.log('Shows the results');
  main.classList.remove('hide');
  cat.style.display = "none";
  quiz.style.display = 'none';
  scorenumbers.style.display = 'none';
  timer.style.display = 'none';
  scorepage.style.display = 'block';
}