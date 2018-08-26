$(document).ready(function() {
    var wins = 0;
    $("#wins").html(wins);
    var words = ["young-the-giant", "phoenix", "rainbow-kitten-surprise", "portugal-the-man", "mumford-and-sons", "glass-animals", "twenty-one-pilots"];\
    var answerTokens = [];
    var wrongGuesses = [];
    var guessed = [];

    function beginGame () {
        var guesses = 8;
        var currentWord = words[Math.floor(Math.random() * words.length)];
        answerTokens.empty();
        wrongGuesses.empty();
        guessed.empty();

        for (i=0; i < currentWord.length; i++) {
            var space = $("<h5>");
            $("#current-word").append(space);
            
            if (currentWord[i] === "-" || currentWord[i] === " ") {
                answerTokens.push(currentWord[i]);
            }
            else {
                answerTokens.push("_");
            }
        };

        $("#current-word").html(answerTokens.join(" "));
        $("#guesses").html(guesses);

    };

    beginGame();

    $(document).keyup(function(event) {
        guesses--;
        var indexesFound = [];
        var lastIndex = 0;
        var userGuess = event.key.toLowerCase();

        while (lastIndex != -1) {
            lastIndex = currentWord.indexOf(userGuess, lastIndex);

            if (lastIndex != -1) {
                indexesFound.push(lastIndex);
                console.log(lastIndex);
                console.log(indexesFound);
            }
        }
    })
})