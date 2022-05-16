let main= document.getElementById('startpage');
let cat= document.getElementById('cat');
let quiz= document.getElementById('quiz');

function startpage(){
        main.style.display='block';
        cat.style.display='none';
        quiz.style.display='none'
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

