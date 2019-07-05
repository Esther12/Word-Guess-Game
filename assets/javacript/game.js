
var guessedList = [];
var answers = [];
var i;
var aword = [];
var obj = [
    {w:"words0",url:"#"},
    {w:"words1",url:"#"},
    {w:"words2",url:"#"},
    {w:"words3",url:"#"},
    {w:"words4",url:"#"}];
    i = obj.length;
    var Guessed;
    console.log(i);
    
    // for(var i = 0; i < obj.length; i++){
        answers = obj[getRandomInt(i)].w;

    // }
     console.log(answers);
    for(var a = 0; a<answers.length; a++){
        aword[a] = '_';
   }
   document.getElementById("words").textContent = aword;
 // This function is run whenever the user presses a key.
 var found = aword.find(function(element) {
    return element == "_";
  });
 document.onkeyup = function(event) {
     
    // Determines which key was pressed.
        Guessed = event.key;
   // for(var i = 0; i < answers.length; i++){
        // for(var a = 0; a<answers[i].length; a++){
        //      aword += "_";
        // }
        console.log(Guessed);
        var found = aword.find(function(element) {
            return element == "_";
          });
        if(found == undefined || guessedList > (aword.length *2)){
            console.log(i);
            guessedList = [];
            break;
            console.log(guessedList);
        }
        for(var j = 0; j<answers.length; j++){
            if(Guessed == answers[j]){
                // aword.replace(aword[j], Guessed);
                //aword[j] = Guessed;
                aword.splice(j, 1, Guessed);
                console.log(aword);
                document.getElementById("words").textContent = aword;
            }
        }
        guessedList+= Guessed;
        document.getElementById("G-list").textContent = guessedList;
        console.log(guessedList);

       // }
       
    }

 

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

