var words = ["game", "play", "fun", "personification", "characteristics", "element", "apple", "pear", "cherry"];
var dashes = [];
var lettersGuessed = [];
var guessCount = 10;

var currentWord = words[Math.floor((Math.random() * words.length))];



function createDashes() {
    for (var i = 0; i < currentWord.length; i++) {
        dashes.push('_');
    }
    console.log(dashes.join(' '));
    document.getElementById('display').innerHTML = dashes.join(' ');
}


createDashes();

document.addEventListener("keypress", function (e) {
    console.log(e.key);
    var userGuess = e.key;
    for (var i = 0; i < currentWord.length; i++) {
        if (userGuess == currentWord[i]) {
            dashes[i] = userGuess;
        } else {
            if (!lettersGuessed.includes(userGuess)) {
                lettersGuessed.push(userGuess);
                document.getElementById("wrong").innerHTML = lettersGuessed.join(" ")
            }

        }
    }

    guessCount--;
    document.getElementById("count").innerHTML = guessCount
    if (guessCount == 0 && dashes.includes('_')) {
        alert("you lose")
    }

    if (!dashes.includes('_')) {
        alert('you win')
    }
    document.getElementById('display').innerHTML = dashes.join(' ');
})

