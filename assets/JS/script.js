// Main Variables
let body = document.getElementById('body');
let main = document.getElementById('startpage');
let startq = document.getElementById('startq')
let cat = document.getElementById('cat');
let quiz = document.getElementById('quiz');
let welcome = document.getElementById('starting');
let scorenumbers = document.getElementById('scores');
let scorepage = document.getElementById('score-page');
let timer = document.getElementById('timer');
let endresult = document.getElementById('end-result');
let finalImage=document.getElementById('final-image');
let lastMessage=document.getElementById('last-message');
let musicbttn=document.getElementById('music-button');
let foot=document.getElementById('footer');
welcome.classList.remove('hide');
// Question and interactive variables
let scores = 0;
let questionsSet;
let categoryChoosen;
let currentQuestion;
let counter;
let music = "off";
const spidermanAudio = new Audio('assets/music/main-music.mp3');

// Display different pages on the site
function startpage(event) {
  console.log('Start page')
  welcome.classList.add('hide');
  body.classList.remove('welcome');
  main.classList.remove('hide');
  foot.classList.remove('hide');
  startq.style.display = 'block';
  cat.style.display = 'none';
  quiz.style.display = 'none';
  scorepage.style.display = 'none';
  scorenumbers.style.display = 'none';
  timer.style.display = 'none';
}

function choice(event) {
  console.log('Category choices');
  main.classList.remove('hide');
  startq.style.display = 'none';
  scorepage.style.display = 'none';
  cat.style.display = 'block';
}

function categories(category) {
  main.classList.remove('hide');
  cat.style.display = "none";
  scorepage.style.display = 'none';
  quiz.style.display = 'block';
  scorenumbers.style.display = 'block';
  timer.style.display = 'block';

  categoryChoosen = category;

  startquiz();
}
// The questions list
let questions = [
  [{
      "question": "When was the first Spider-Man comic released?",
      "answerone": "1962",
      "answertwo": "1958",
      "answerthree": "1948",
      "answerfour": "1973",
      "correctanswer": "1962",
    },

    {
      "question": "Who wrote the most Spider-Man comics?",
      "answerone": "Steve Ditko",
      "answertwo": "Kaare Andrews",
      "answerthree": "Stan Lee",
      "answerfour": "Gerard Way",
      "correctanswer": "Stan Lee"
    },

    {
      "question": "Who was Spider-Man's strongest enemy?",
      "answerone": "Rhino",
      "answertwo": "Sandman",
      "answerthree": "Venom",
      "answerfour": "Doctor Octopus",
      "correctanswer": "Rhino"
    },

    {
      "question": "Who is the most popular superhero?",
      "answerone": "Iron-Man",
      "answertwo": "Captain America",
      "answerthree": "Hulk",
      "answerfour": "Spider-Man",
      "correctanswer": "Spider-Man"
    },

    {
      "question": "Which of these is NOT Peter Parker's special ability?",
      "answerone": "Enhanced strength",
      "answertwo": "Reflexes",
      "answerthree": "Durability",
      "answerfour": "Flying",
      "correctanswer": "Flying"
    }
  ],

  [{
      "question": "Which film starred Tom Holland?",
      "answerone": "Spider-Man",
      "answertwo": "The Amazing Spider-Man",
      "answerthree": "Spider-Man 3",
      "answerfour": "Spider-Man Homecoming",
      "correctanswer": "Spider-Man Homecoming"
    },

    {
      "question": "When was the fist Spider-Man movie released in the cinema?",
      "answerone": "2012",
      "answertwo": "2002",
      "answerthree": "2004",
      "answerfour": "2017",
      "correctanswer": "2002"
    },

    {
      "question": "Who was the villain in the Amazing Spider-Man 2?",
      "answerone": "Lizard",
      "answertwo": "Green Goblin and Electro",
      "answerthree": "Doctor Octopus",
      "answerfour": "Sandman and Venom",
      "correctanswer": "Green Goblin and Electro"
    },

    {
      "question": "How many times has MJ been captured by a villain?",
      "answerone": "4",
      "answertwo": "3",
      "answerthree": "None",
      "answerfour": "6",
      "correctanswer": "4"
    },

    {
      "question": "What is MJ's full name in the films that Tom Holland starred in?",
      "answerone": "Mary-Jane Wattson",
      "answertwo": "Michelle Jones-Wattson",
      "answerthree": "Michelle-Jane Wattson",
      "answerfour": "None of these",
      "correctanswer": "Michelle Jones-Wattson"
    }
  ],


  [{
      "question": "How many Spider-Man games have been released since 2000?",
      "answerone": "32",
      "answertwo": "20",
      "answerthree": "4",
      "answerfour": "67",
      "correctanswer": "20"
    },

    {
      "question": "Which platform has the exclusive right to the most famous Spider-Man game?",
      "answerone": "Microsoft XBOX",
      "answertwo": "Nintendo",
      "answerthree": "PC",
      "answerfour": "PlayStation",
      "correctanswer": "PlayStation"
    },

    {
      "question": "How old is Peter Parker in Spider-Man (2018) video game?",
      "answerone": "16",
      "answertwo": "29",
      "answerthree": "23",
      "answerfour": "33",
      "correctanswer": "23"
    },

    {
      "question": "What character can you control in the Spider-Man (2018) video game?",
      "answerone": "Aunt May",
      "answertwo": "Uncle Ben",
      "answerthree": "Otto Octavius",
      "answerfour": "MJ",
      "correctanswer": "MJ"
    },

    {
      "question": "Which game has Spider-Man appeared in?",
      "answerone": "Fortnite",
      "answertwo": "Call of Duty",
      "answerthree": "Battlefield",
      "answerfour": "Minecraft",
      "correctanswer": "Fortnite"
    }
  ]
]

// Start the quiz from beginning
function startquiz(event) {
  console.log('Game started');
  choosecat();
  resetting();
  randomquestions();
  showquestions();
  starttimer();
  clearInterval(countdown);
}

// Questions and answer related functions
function choosecat(event) {
  console.log("Category choosen");
  questionList = JSON.parse(JSON.stringify(questions));
  switch (categoryChoosen) {

    case "comic":
      questionsSet = questionList[0];
      break;
    case "film":
      questionsSet = questionList[1];
      break;
    case "game":
      questionsSet = questionList[2];
      break;
    default:
      alert("No valid category been chosen");
  }


}

function randomquestions() {
  let randomQuestion = Math.floor(Math.random() * questionsSet.length);
  currentQuestion = questionsSet[`${randomQuestion}`];
}

function showquestions() {

  const questiontext = document.getElementById('question');
  questiontext.innerText = currentQuestion.question;

  let answerone = document.getElementById('answer1');
  answerone.innerText = currentQuestion.answerone;

  const answertwo = document.getElementById('answer2');
  answertwo.innerText = currentQuestion.answertwo;

  const answerthree = document.getElementById('answer3');
  answerthree.innerText = currentQuestion.answerthree;

  const answerfour = document.getElementById('answer4');
  answerfour.innerText = currentQuestion.answerfour;
}

function checkanswers(event) {
  console.log(event);
  if (event.target.innerHTML === currentQuestion.correctanswer) {
    console.log('Correct Answer');
    scores++;
    scorepush();
  } else {
    console.log('Wrong Answer');
  }
  removeAnsweredQuestion();
  nextquestion();
}

function removeAnsweredQuestion() {
  let questionIndex = questionsSet.indexOf(currentQuestion);
  questionsSet.splice(questionIndex, 1)
}

function nextquestion() {
  console.log('Next question');
  if (questionAnswered < questionsSet.length) {
    randomquestions();
    showquestions();
  } else if (questionsSet.length == questionAnswered) {
    gameover();
  } else {
    alert('There was a problem! Please start again');
  }
}

// Timer and scores functions
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

function scorepush() {
  scorenumbers.innerHTML = `Score: ${scores}/5`;
}

function gameover() {
  console.log('Finished the game');
  clearInterval(counter);
  endscore();
}

function endscore() {
  console.log('Shows the results');
  main.classList.remove('hide');
  startq.style.display='none';
  cat.style.display = "none";
  quiz.style.display = 'none';
  scorenumbers.style.display = 'none';
  timer.style.display = 'none';
  scorepage.style.display = 'block';
  endresult.innerText = `Your result: ${scores}/5`;
  if(scores<=2){
    finalImage.src="assets/images/low-score.jpeg";
    lastMessage.innerHTML=`I think you can do this better! <br>Press the Home button and start over!`;
  }
  else if(scores >2 && scores <= 4){
    finalImage.src="assets/images/mid-scores.webp";
    lastMessage.innerHTML=`You know the important things. <br>Press the Home button and try another category!`;
  }
  else if(scores === 5){
    finalImage.src="assets/images/high-score.webp";
    lastMessage.innerHTML=`Congratulations!You are a real fan!<br> Press the Home button and test yourself in another category!`
  }
}
// Reset the whole quiz to beginning
function resetting() {
  clearInterval(countdown);
  seconds = 60;
  scorenumbers.innerHTML = `Score: 0/5`;
  questionAnswered = 0;
  questionIndex = 0;
  console.log(questions)
  scores = 0;
}
// Music related functions
function musicbutton() {
   
   if(music === "on"){ 
    musicbttn.innerHTML=`<i class="fas fa-volume-mute"></i><br><span>Music off</span>`;
  } else{
   musicbttn.innerHTML=`<i class="fas fa-volume-up"></i><br><span>Music on</span>`;
  }
}

spidermanAudio.loop = true;
spidermanAudio.volume=0.2;

function playmusic(){
  if(music==="on"){
    spidermanAudio.play();
  } else{
    spidermanAudio.pause();
  }
}

function startMusic(){
  if(music === "off"){
    music= "on";
    console.log('Music started')
  } else {
    music = "off";
    console.log('Music stopped')
  }
  musicbutton();
  playmusic();
}

// The event listeners
welcome.addEventListener("click", startpage);
startq.addEventListener('click', choice);
document.getElementById('home-button').addEventListener('click', startpage);
document.getElementById('answers').addEventListener('click', checkanswers);
document.getElementById('music-button').addEventListener('click', startMusic);