let y = Math.floor(Math.random() * 100 + 1);
let guess = 1;
let attempts = 5;

document.getElementById("submitguess").onclick = function () {
    let x = document.getElementById("number").value;

    if (attempts === 0) {
        messageArea.value = "Sorry, you've reached the maximum number of attempts. The correct number was " + y;
        messageArea.style.display = "block";
        return; // Exit the function early
    }

    if (x == y) {
        messageArea.value = "CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS";
    } else if (x > y) {
        guess++;
        messageArea.value = "OOPS SORRY!! TRY A SMALLER NUMBER";
    } else {
        guess++;
        messageArea.value = "OOPS SORRY!! TRY A GREATER NUMBER";
    }

    attempts--;
    if (attempts === 0) {
        messageArea.value += "\nSorry, you've reached the maximum number of attempts. The correct number was " + y;
    }

    messageArea.style.display = "block";
}

document.getElementById("messageArea").onmouseout = function() {
    this.style.display = "none";
}
