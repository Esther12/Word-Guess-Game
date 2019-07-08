var Guessed;
var guessedList = [];//Screen
var answers = [];//back one element of obj
var answerWord;//back w:----
var answerImg;//back url:#
var screenWord = [];//Screen
var countScore;//the score
var countLife = 6;//the total life
var obj = [
    {w:"toy",url:"assets/images/Toy.jpg"},
    {w:"simpsons",url:"assets/images/simpsons.jpeg"},
    {w:"moana",url:"assets/images/Moana.jpg"},
    {w:"minnie",url:"assets/images/Minnie.jpeg"},
    {w:"mickey",url:"assets/images/mickey.jpg"},
    {w:"pig",url:"assets/images/Lion_King.png"},
    {w:"dumbo",url:"assets/images/dumbo.jpg"},
    {w:"cinderella",url:"assets/images/Cinderella.jpg"},
    {w:"garfield",url:"assets/images/Carfield.jpg"},
    {w:"family",url:"assets/images/incredible-family.png"}];

    gameStart();
    gameNext();
 // This function is run whenever the user presses a key.

 document.onkeyup = function(event) {

    // Determines which key was pressed.
        Guessed = event.key;

        scoreAndCount();

        for(let j = 0; j < answerWord.length; j++){
            if(Guessed == answerWord[j]){
                screenWord.splice(j, 1, Guessed);
                console.log(screenWord);
                for(let i = 0; i < screenWord.length; i++){
                    screenWord[i] = screenWord[i].toUpperCase();
                }
                document.getElementById("words").textContent = screenWord;
            }
        }
        guessedList+= Guessed;
        document.getElementById("G-list").textContent = "Guessed List:" + guessedList;
        document.getElementById("rounds").textContent = "Life: " + countLife;
        document.getElementById("marks").textContent = "Score: " + countScore;
        console.log(guessedList);
       
    }
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function gameNext(){
    //timer();
    guessedList =[];
    answers = [];
    screenWord = [];
    answerWord = [];
    answerImg = "";
    answers = obj[getRandomInt(obj.length)];
    answerWord = answers.w;
    answerImg = answers.url;
    console.log(answers);
    for(let a = 0; a < answerWord.length; a++){
            screenWord[a] = '_';
    }
    document.getElementById("words").textContent = screenWord;
    document.getElementById("imgs").src = answerImg;
} 
function gameStart(){
    gameNext();
    countLife = 6;
    countScore = 0;
    
}

function scoreAndCount(){
    let lengthTwo = screenWord.length*2;
    let found = screenWord.find(function(element) {
        return element == "_";
      });
      if(found == undefined){
        guessedList = [];
        gameNext();
        countScore++;
        console.log(guessedList);
        alert("Nice Game!");
    }else if(guessedList.length > lengthTwo){
        scoreJian();
    }
}

// var timeleft = 20;
// var downloadTimer = setInterval(function(){
//   document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
//   timeleft -= 1;
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("countdown").innerHTML = "Finished";
//     gameNext();
//   }
// }, 1000);

var count=10;

var counter = setInterval(timer, 1000); 

function timer()
{
    document.getElementById("countdown").innerHTML = count + " seconds remaining";
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     document.getElementById("countdown").innerHTML = "Finished";
     return;
  }
  //Do code for showing the number of seconds here
}
function scoreJian(){
        countLife-- ;
        guessedList = [];
        if(countLife < 0){
            gameStart();
            alert("Bad Game! Better next time!");  
        }else{
            gameNext();
        }
}
