let body = document.getElementById('body');
let main = document.getElementById('startpage');
let startq = document.getElementById('startq')
let cat = document.getElementById('cat');
let quiz = document.getElementById('quiz');
let welcome = document.getElementById('starting');

welcome.classList.remove('hide');

let currentQuestion;
let randomQuestions;


function startpage() {
  welcome.classList.add('hide');
  body.classList.remove('welcome');
  main.classList.remove('hide');
  cat.style.display = 'none';
  quiz.style.display = 'none';
}

function choice() {
  main.classList.remove('hide');
  startq.style.display = 'none';
  cat.style.display = 'block';
}

function categories(cats) {
  main.classList.remove('hide');
  cat.style.display = "none";
  quiz.style.display = 'block';

  startquiz();
}

let questions = [
  {
      question: "When was the first Spider-Man comic released?",
      answer1: "1962",
      answer2: "1958",
      answer3: "1948",
      answer4: "1973",
      correctAnswer: "1962"
    },
    {
      question: "Who wrote the most Spider-Man comics?",
      answer1: "Steve Ditko",
      answer2: "Kaare Andrews",
      answer3: "Stan Lee",
      answer4: "Gerard Way",
      correctAnswer: "Stan Lee"
    },
    {
      question: "Who was Spider-Man's stronget enemy?",
      answer1: "Rhino",
      answer2: "Sandman",
      answer3: "Venom",
      answer4: "Doctor Octopus",
      correctAnswer: "Rhino"
    },
  

];


function randomquestions() {
  randomQuestions= questions.sort(() => Math.random() - .5);
}

function nextquestion(){
  showquestions(randomQuestions[currentQuestion]);

}
function showquestions(questions) {

  const questiontext = document.getElementById('question');
  questiontext.innerText = questions.question;

}


function startquiz() {
  randomquestions();
  currentQuestion=0;
  nextquestion();
  showquestions();
}

function checkanswers() {

}

function gameover() {

}