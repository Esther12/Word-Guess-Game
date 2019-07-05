debugger
var guessedList = [];
var answers = [];
var aword ="";
var obj = [{w:"words",url:"#"},{w:"words",url:"#"},{w:"words",url:"#"},
    {w:"words",url:"#"},{w:"words",url:"#"}];
    for(var i = 0; i < obj.length; i++){
        answers[i] = obj[i].w;
    }
    // console.log(answers);

 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {

    // Determines which key was pressed.
    var Guessed = event.key;

    document.getElementById("words").textContent = aword;
    document.getElementById("G-list").textContent = guessedList;
    for(var i = 0; i < answers.length; i++){
        for(var a = 0; a<answers[i].length; a++){
             aword += "_";
        }
        if(aword.search("_")== -1 || guessedList > (aword.length *2)){
            i++;
            guessedList = [];
        }
        for(var j = 0; j<answers[i].length; j++){
            if(Guessed == answers[i][j]){
                aword[j] = Guessed;
                guessedList+= Guessed;
            }else{
                guessedList += Guessed;
            }
        }

        }
    }



