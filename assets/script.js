let quiz=document.getElementById("quiz-box");
const questions=[
    ["Which year the first Spider-Man comic been released?", "1984", "1962", "1973", "1948"]
];

let answers=document.getElementById('answers');

let questionPool;
let questionSet;
let currentQuestion;
let questionSetLength;


function questionsOrder(){
    questionPool= questionSet.length;
    let randomNumber = Math.floor(Math.random()*questionPool);
    currentQuestion= questionSet[`${randomNumber}`];
}

function htmlQuestions(){
    let questionText= document.getElementById('questions');
    questionText.innerText =currentQuestion[0];

    let answer1= document.getElementById("answer1");
    answer1.innerText= currentQuestion[1];

    let answer2= document.getElementById("answer2");
    answer2.innerText=currentQuestion[2];

    let answer3= document.getElementById("answer3");
    answer3.innerText=currentQuestion[3];

    let answer4= document.getElementById("answer4");
    answer4.innerText=currentQuestion[4];
}

htmlQuestions();

let questionAnswered=0;

function startQuiz() {
    clearInterval(timerFunction);
    currentScore = 0;
    questionsAnswered = 0;
    pushScore();
    pushProgress();
    chooseQuestionSet();
    questionOrder();
    htmlQuestions();
    startTimer();
}