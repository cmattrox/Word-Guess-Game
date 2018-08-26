$(document).ready(function () {
    var wins = 0;
    var words = ["grouplove", "foals", "mgmt", "lovelytheband", "joywave", "phoenix"];
    function randomWord () {
        return words[Math.floor(Math.random() * words.length)];
    };
    var currentWord = randomWord();
    console.log(currentWord)
    var blank = "_";
    var answerTokens = [];
    for (i = 0; i < currentWord.length; i++) {answerTokens.push("_")};
    var guesses = 8;
    var wins = 0;
    var guessCounter = 1;
    var guessed = [];

    function startGame() {
        $("#current-word").html(answerTokens.join(" "));
        $("#guesses").html(guesses);
        $("#wins").html(wins);
    }

    startGame();


    $(document).keyup(function (event) {
        var userGuess = event.key.toLowerCase();
        console.log(userGuess)
        console.log(currentWord)

        if (guessed.indexOf(userGuess) == -1){
            guessed.push(userGuess);
            $("#wrongGuesses").html(guessed.join(", "));
        };

        if (currentWord.indexOf(userGuess) > -1) {
            for (i=0; i<currentWord.length; i++) {
                if (currentWord[i] == userGuess) {
                    answerTokens.splice(i, 1, userGuess);
                    console.log(answerTokens)
                    $("#current-word").html(answerTokens.join(" "));
                }
            }
            if (answerTokens.join("") == currentWord) {
                alert("congrats you won");
                wins ++;
                // $("#wins").html(wins)
                document.location.reload
            }
        } else {
            var misses = guessCounter++;
            var guessCountMiss = (guesses - misses);
            $("#guesses").html(guessCountMiss);

            if (guessCountMiss == 0) {
                alert("Sorry you lost try again");
                document.location.reload
            }
        }
    })

})