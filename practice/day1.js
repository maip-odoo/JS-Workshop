let y = Math.floor(Math.random() * 100 + 1);
let guess = 1;
document.getElementById("submitguess").onclick = function () {
    let x = document.getElementById("guessField").value;

    if (x == y) {
        messageArea.value="CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS ";
    }
    else if (x > y) {
        guess++;
        messageArea.value="OOPS SORRY!! TRY A SMALLER NUMBER";
    }
    else {
        guess++;
        messageArea.value="OOPS SORRY!! TRY A GREATER NUMBER"
    }
    messageArea.style.display = "block";
    
}
document.getElementById("messageArea").onmouseout = function () {
    this.style.display = "none";
}

