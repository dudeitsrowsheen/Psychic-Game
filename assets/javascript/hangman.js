document.addEventListener("DOMContentLoaded", function () {
    var wins = 0
    var losses = 0
    var guessesLeft = 9
    var yourGuesses = [];
    var blank = [];
    var answers = ["Bitches", "Bye Becky", "fuck shit", "cutie", "swear words", "Shaquima", "heyy you",];

    var wordText = document.getElementById("word-text");
    var winstext = document.getElementById("wins-text");
    var lossestext = document.getElementById("losses-text");
    var GuessesLeftText = document.getElementById("GuessesLeft-text");
    var YourGuessesSoFartext = document.getElementById("YourGuessesSoFar-text");

    var updateText = function () {
        wordText.text = blank;
        winstext.text = wins;
        lossestext.text = losses;
        GuessesLeftText.text = guessesLeft;
        YourGuessesSoFartext.text = yourGuesses;
    }
    updateText();

    var number = Math.floor(Math.random() * answers.length)


    var word = answers[number];
    var wordLength = word.length;
    for(var i = 0; i < wordLength; i++){
        console.log(blank);
        blank.push("-");
    }
    updateText();
    var wordToArray = function (word) {
        //splits "Bitches" into ["B", "i", "t", "c", "h", "e", "s"]
        return word.split("");
    }
    var wordLetters = wordToArray(word);

    document.onkeyup = function (event) {
        var entry = event.key;
        guessesLeft--;
        if (guessesLeft <= 0) {
            console.log("you a loser")
        }

        for (var i = 0; i < wordLetters.length; i++) {
            if (entry === wordLetters[i]) {
                blank[i] = entry;
                updateText();
                console.log(blank);
            }

        }
        updateText();

        var solved = true;
        for (var i = 0; i < wordLetters.length; i++) {
            if (blank[i] === "-") {
                solved = false;
                console.log("keep guessing...");
            }

        }
        if(solved){
            console.log("you win");
        }
        console.log(entry)
    };


    console.log(word)

    console.log(wordLength)
    console.log(wordLetters);
    //   JS string length


    // if (user guess === computer guess);

    // if (user guess is not correct minus try)

})






