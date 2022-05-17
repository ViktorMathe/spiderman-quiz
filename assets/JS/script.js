let body=document.getElementsByClassName('mainpage');
let main= document.getElementById('startpage');
let cat= document.getElementById('cat');
let quiz= document.getElementById('quiz');
let welcome= document.getElementById('starting');
let head=document.getElementsByTagName('header');

document.getElementById('cont').addEventListener('click',welcome());

function welcome(){
        welcome.classList.remove('hide');
        main.classList.add('hide');
        head.classList.add('hide');
        cat.classList.add('hide');
        quiz.classList.add('hide');
}

function startpage(){
        welcome.classList.add('hide');
        main.classList.remove('hide');
        head.classList.remove('hide');
        cat.classList.add('hide');
        quiz.classList.add('hide');
}

function choice(){
        main.style.display='none';
        cat.style.display='block';
        quiz.style.display='none';
}

function categories(){
        main.style.display="none";
        cat.style.display='none';
        quiz.style.display='block'
}




let Questions=[{
    id:0,
    q: "When was the first Spider-Man comic released?",
    a: [{ text: "1962", isCorrect: true},
        {text: "1958", isCorrect: false},
        {text: "1948" , isCorrect: false},
        {text: "1973",isCorrect:false}]
}]

