




/* var computer answers: "whatever letter I pick?" */
/* var computer options: ["a"-"z"] (like rps game) or ["zebra"] (word choices) or type all letters ("a", "b"...) */
var wins = 0 
var losses = 0
var guessesLeft = 9
var yourGuesses = []
var answers = ["Bitches", "You Ugly", "fuck shit"];




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
            console.log("you lose")
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






