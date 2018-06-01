$(document).ready(function() {
    var wins = 0;
    var guesses = 8;
    var words = ["young-the-giant", "phoenix", "twenty-one-pilots", "glass-animals", "rainbow-kitten-surprise", "mumford-and-sons"];
    var currentWord = words[Math.floor(Math.random()* words.length)];
    var answerTokens = [];
    var indexesFound = [];
    var lastIndex
    for (i=0; i < currentWord.length; i++){
        var space = $("<h5>");
        $("#current-word").append(space);
        
        if(currentWord[i] === "-" || currentWord[i] === " "){
            answerTokens.push(currentWord[i]);
        }
        else {
            answerTokens.push("_");
        }
    }
    
    $("#current-word").text(answerTokens.join(" "));

    $(document).keyup(function(event) {
        // var indexesFound = [];
        // var lastIndex = 0;
        var userGuess = event.key.toLowerCase();
        console.log(userGuess);

        while (lastIndex != -1) {
            lastIndex = currentWord.indexOf(userGuess, lastIndex);
            console.log(lastIndex);

            if(lastIndex != -1){
                indexesFound.push(lastIndex);
                console.log(indexesFound.join(" "));
            }
            return indexesFound;
        }
        

    })
    






})
