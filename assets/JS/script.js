let body = document.getElementById('body');
let main = document.getElementById('startpage');
let startq = document.getElementById('startq')
let cat = document.getElementById('cat');
let quiz = document.getElementById('quiz');
let welcome = document.getElementById('starting');

welcome.classList.remove('hide');

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

    catchoice = cats;
    answers.classList.add(`${cats}`);

    startquiz();
}

let questions = [
    [
    [ "When was the first Spider-Man comic released?", "1962", "1958", "1948","1973"],
    [ "Who wrote the most Spider-Man comics?","Steve Ditko", "Kaare Andrews", "Stan Lee", "Gerard Way" ],
    [ "Who was Spider-Man's stronget enemy?", "Rhino", "Sandman", "Venom", "Doctor Octopus"],
    ],
    [
        ["What?", "nothing", "not much", "no" , "nien"]
    ]
];



function choosequestions() {
    let fullQuestions = JSON.parse(JSON.stringify(questions));
    if (catchoice === 'comic') {
        questionsSet = fullQuestions[0];
    } else {
        alert("That's not a valid category. Choose another one!");
    }
    questionsSetlength = questionsSet.length;
}

function randomquestions(){
    questionPool = questionsSet.length;
    let randomNumber = Math.floor(Math.random() * questionPool);
    currentQuestion = questionsSet[`${randomNumber}`];
}

function showquestions() {

    let questiontext = document.getElementById('question');
    questiontext.innerText = currentQuestion[0];

    let answerone = document.getElementById('answer1');
    answerone.innerText = currentQuestion[1];

    let answertwo = document.getElementById('answer2');
    answertwo.innerText = currentQuestion[2];

    let answerthree = document.getElementById('answer2');
    answerthree.innerText = currentQuestion[3];

    let answerfour = document.getElementById('answer2');
    answerfour.innerText = currentQuestion[4];
}


function startquiz() {
        randomquestions();
        choosequestions();
        showquestions();
    }

function checkanswers() {

}

function gameover() {

}