let body = document.getElementById('body');
let main = document.getElementById('startpage');
let startq = document.getElementById('startq')
let cat = document.getElementById('cat');
let quiz = document.getElementById('quiz');
let welcome = document.getElementById('starting');

welcome.classList.remove('hide');

let currentQuestion;
let randomQuestions;
let questionsSet;
let questionPool;


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

  ["Who wrote the most Spider-Man comics?", "Steve Ditko", "Kaare Andrews", "Stan Lee", "Gerard Way"],

  ["Who was Spider-Man's stronget enemy?", "Rhino", "Sandman", "Venom", "Doctor Octopus", ],
],
[
  ['whatever?', 'yes', 'no',]
]

];

function choosecat() {
  console.log("Category choosen");
  const fullQuestions = JSON.parse(JSON.stringify(questions));
  if (catchoice === 'comic') {
    questionsSet = fullQuestions[0];
  } else if (catchoice === 'film') {
    questionsSet = fullQuestions[1];
  } else {
    alert("No valid category been chosen");
  }
}



function randomquestions() {
   questionPool = questionsSet.length
  let randomQuestion = Math.floor(Math.random()* questionPool); 
 /** randomQuestions = questions.sort(() => Math.random() - .5); */
   currentQuestion= questionsSet[`${randomQuestion}`];
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
  showquestions(randomQuestions[currentQuestion]);

}


function startquiz() {
  choosecat();
  randomquestions();
  showquestions();
  nextquestion();
}

function checkanswers() {
  questionsSet=0;
}

function gameover() {

}