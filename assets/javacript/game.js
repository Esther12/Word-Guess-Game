debugger
var guessedList = [];
var answers = [];
var i;
var aword ="";
var obj = [
    {w:"words0",url:"#"},
    {w:"words1",url:"#"},
    {w:"words2",url:"#"},
    {w:"words3",url:"#"},
    {w:"words4",url:"#"}];
    i = obj.length;
    console.log(i);
    
    // for(var i = 0; i < obj.length; i++){
        answers = obj[getRandomInt(i)].w;

    // }
     console.log(answers);
    for(var a = 0; a<answers.length; a++){
        aword += "_";
   }
   document.getElementById("words").textContent = aword;
 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {

    // Determines which key was pressed.
    var Guessed = event.key;
   // for(var i = 0; i < answers.length; i++){
        // for(var a = 0; a<answers[i].length; a++){
        //      aword += "_";
        // }
        console.log(aword);
        if(aword.search("_")== -1 || guessedList > (aword.length *2)){
            console.log(i);
            guessedList = [];
            console.log(guessedList);
        }
        for(var j = 0; j<answers.length; j++){
            if(Guessed == answers[j]){
                aword[j] = Guessed;
                console.log(aword);
            }
        }
        guessedList+= Guessed;
        console.log(guessedList);

       // }
       document.getElementById("G-list").textContent = guessedList;
    }

 

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

