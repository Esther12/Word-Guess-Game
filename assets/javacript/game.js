var Guessed;
var guessedList = [];//Screen
var answers = [];//back one element of obj
var answerWord;//back w:----
var answerImg;//back url:#
var screenWord = [];//Screen
var countScore;//the score
var countLife = 6;//the total life
var obj = [
    {w:"words0",url:"assets/images/stop watching video.jpg"},
    {w:"words1",url:"assets/images/tidy.jpg"},
    {w:"words2",url:"assets/images/travel-tourism.jpg"},
    {w:"words3",url:"#"},
    {w:"words4",url:"#"}];

    gameStart();
    gameNext();
 // This function is run whenever the user presses a key.

 document.onkeyup = function(event) {

    // Determines which key was pressed.
        Guessed = event.key;
        

        console.log(Guessed);

        scoreAndCount();

        for(let j = 0; j < answerWord.length; j++){
            if(Guessed == answerWord[j]){
                screenWord.splice(j, 1, Guessed);
                console.log(screenWord);
                document.getElementById("words").textContent = screenWord;
            }
        }
        guessedList+= Guessed;
        document.getElementById("G-list").textContent = guessedList;
        document.getElementById("rounds").textContent = "Life: " + countLife;
        document.getElementById("marks").textContent = "Score: " + countScore;
        console.log(guessedList);
       
    }

 

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function gameNext(){
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
        countLife-- ;
        guessedList = [];
        if(countLife < 0){
            gameStart();
            alert("Bad Game! Better next time!");  
        }else{
            gameNext();
        }
    }
}
