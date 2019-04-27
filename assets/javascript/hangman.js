var wins = 0 
var losses = 0
var guessesLeft = 9
var yourGuesses = []
var answers = ["Bitches", "Bye Becky", "fuck shit", "cutie", "swear words", "Shaquima", "heyy you",];

var winstext = document.getElementById("wins-text");
var lossestext = document.getElementById("losses-text");
var GuessesLeftText = document.getElementById("GuessesLeft-text");
var YourGuessesSoFartext = document.getElementById("YourGuessesSoFar-text");

winstext.innerText = wins;
lossestext.innerText = losses;
GuessesLeftText.innerText = guessesLeft;
YourGuessesSoFartext.innerText = yourGuesses;


var number = Math.floor(Math.random()*answers.length)


var word = answers[number];
var wordLength = word.length
var wordToArray = function(word){
    //splits "Bitches" into ["B", "i", "t", "c", "h", "e", "s"]
    return word.split("");
}
var wordLetters = wordToArray(word);

document.onkeyup = function(event) {
        var entry = event.key;
        guessesLeft --;
        if (guessesLeft <= 0){
            console.log("you a loser")
        }

        for(var i = 0; i < wordLetters.length; i++){
            if(entry === wordLetters[i]){
                console.log("matched");
            }

        }
        
        console.log(entry)
      };


      console.log(word)

      console.log(wordLength)
        console.log(wordLetters);
    //   JS string length


// if (user guess === computer guess);

// if (user guess is not correct minus try)






