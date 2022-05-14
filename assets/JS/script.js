let Questions=[{
    id:0,
    q: "When was the first Spider-Man comic released?",
    a: [{ text: "1962", isCorrect: true},
        {text: "1958", isCorrect: false},
        {text: "1948" , isCorrect: false},
        {text: "1973",isCorrect:false}]
}]

var start = true;

function quizGame(id){
    const question=document.getElementById('question')
    question.innerText= Questions[id].q;

    const op1=document.getElementById('answer1');
    const op2=document.getElementById('answer2');
    const op3=document.getElementById('answer3');
    const op4=document.getElementById('answer4');

    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected= "";

    if(start){
        quizGame('0');
    }
}