$(document).ready(function() {
    var wins = 0;
    var guesses = 8;
    var words = ["young-the-giant", "phoenix", "twenty-one-pilots", "glass-animals", "rainbow-kitten-surprise", "mumford-and-sons"];
    var currentword = words[Math.floor(Math.random()* words.length)];
    var answerTokens = [];
    for (i=0; i < currentword.length; i++){
        console.log(currentword.length);
        console.log(currentword)
        var space = $("<h5>");
        $("#current-word").append(space);
        
        if(currentword[i] === "-" || currentword[i] === " "){
            answerTokens.push(currentword[i]);
        }
        else {
            answerTokens.push("_")
        }
    }
    
    $("<h5>").text(answerTokens.join(" "));
    






})
