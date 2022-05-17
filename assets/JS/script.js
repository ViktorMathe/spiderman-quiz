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

function categories() {
    main.classList.remove('hide');
    cat.style.display = "none";
    quiz.style.display = 'block';
}




let questions = [{

    question: "When was the first Spider-Man comic released?",
    answer: [{
            text: "1962",
            isCorrect: true
        },
        {
            text: "1958",
            isCorrect: false
        },
        {
            text: "1948",
            isCorrect: false
        },
        {
            text: "1973",
            isCorrect: false
        }
    ]
}]