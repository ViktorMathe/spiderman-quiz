let body = document.getElementById('body');
let main = document.getElementById('startpage');
let startq = document.getElementById('startq')
let cat = document.getElementById('cat');
let quiz = document.getElementById('quiz');
let welcome = document.getElementById('starting');
let scorenumbers= document.getElementById('scores');

welcome.classList.remove('hide');

let currentQuestion;
let randomQuestions;
let questionsSet;
let questionPool;
let qanswered;


function startpage() {
  console.log('Start page')
  welcome.classList.add('hide');
  body.classList.remove('welcome');
  main.classList.remove('hide');
  cat.style.display = 'none';
  quiz.style.display = 'none';
}

function choice() {
  console.log('Category choices')
  main.classList.remove('hide');
  startq.style.display = 'none';
  cat.style.display = 'block';
}

function categories(cats) {
  main.classList.remove('hide');
  cat.style.display = "none";
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
  ],
  [
    ['Which film was starred by Tom Holland?', 'Spider-Man', 'The Amazing Spider-Man', 'Spider-Man 3', 'Spider-Man Homecoming', 'Spider-Man Homecoming'],

    ['When was the fist Spider-Man movie released in the cinemas?', '2012', '2002', '2004', '2017', '2002'],

    ['Who was the villain in the Amazing Spider-Man 2?', 'Lizard', 'Green Goblin and Electro', 'Doctor Octopus', 'Sandman and Venom', "Green Goblin and Electro"],

  ],
  [
    ['What?', 'nothing', 'something', ]
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
  if( qanswered < questionPool) {
    questionPool--;
    removeAnsweredQ();
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
  let questionshown = questionsSet.indexOf(currentQuestion);
  questionsSet.splice(questionshown,1);
}


function startquiz() {
  choosecat();
  randomquestions();
  showquestions();
  qanswered=0;
  scores=0;
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

function scorepush(){
  scorenumbers.innerText=`${scores}`;
}

function gameover() {
  questionsSet = 0;
}