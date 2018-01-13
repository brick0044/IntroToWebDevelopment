
function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["LuckySevens"].elements.length; 
        loopCounter++) {
        if (document.forms["LuckySevens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["LuckySevens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}

function resetForm() {
    clearErrors();
    document.forms["LuckySevens"]["startingBet"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Play";
    document.getElementById("resetButton").innerText = "Reset";
    document.getElementById("resetButton").style.display = "none";
    document.getElementById("submitButton").style.display = "block";
    document.forms["LuckySevens"]["startingBet"].focus();
}

var count = 0;
var maxCount = 0;
var max = 0;
function rollDice(minimum, maximum) {
    var firstNumber = Math.ceil(Math.random() * (1 + maximum - minimum));
    var secondNumber = Math.ceil(Math.random() * (1 + maximum - minimum));
    var randomNumber = firstNumber + secondNumber;
    if (randomNumber == 7) {
        totalAmount += 4;
    } else if (totalAmount > max) {
            max = totalAmount;
            maxCount = count;
        } else 
            totalAmount -= 1;
   
}
var totalAmount = 0;
function validateItems() {
    clearErrors();
    var input = document.forms["LuckySevens"]["startingBet"].value.replace('$', '');
    var startingBet = parseFloat(input);
    if (startingBet == "" || isNaN(startingBet)) {
        alert("Starting Bet must be a number.");
        document.forms["LuckySevens"]["startingBet"]
        .parentElement.className = "form-group has-error";
        document.forms["LuckySevens"]["startingBet"].focus();
        return false;
    }
    if (startingBet <= 0) {
        alert("Starting Bet must be greater than zero.");
        document.forms["LuckySevens"]["startingBet"]
        .parentElement.className = "form-group has-error";
        document.forms["LuckySevens"]["startingBet"].focus();
        return false;
    }
    totalAmount = startingBet;
    do {
        rollDice(1, 6);
        count++;
    }
    while (totalAmount > 0 ) 

    document.getElementById("line").style.display = "block";
    document.getElementById("resultsTag").style.display = "block";
    document.getElementById("results").style.display = "block";
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("resetButton").style.display = "block";
    document.getElementById("resetButton").innerText = "Play Again";
    document.getElementById("startBet").innerHTML = '$' + startingBet.toFixed(2);
    document.getElementById("totalRollsBroke").innerHTML = count;
    document.getElementById("highestAmount").innerHTML = '$' + max.toFixed(2);
    document.getElementById("highestAmountRolls").innerHTML = maxCount;
    return false;  
}