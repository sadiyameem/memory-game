// timer logic
var time = 0;
var timerElement = document.getElementById("timer");


// start timer
var timer = setInterval(function() {
    time++;
    timerElement.textContent = "Time: " + time + "s";
}, 1000);

// emoji pairs
var emojis = ["🐶","🐶","🐱","🐱","🐵","🐵","🦆","🦆","🐢","🐢","🐬","🐬","🦭","🦭","🦕","🦕"];

// shuffle emojis
var shuf_emojis = emojis.sort(() => Math.random() - 0.5);

// variables for open cards
var firstCard = null;
var secondCard = null;

// create cards
for (var i = 0; i < shuf_emojis.length; i++) {
    var box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = "<span>" + shuf_emojis[i] + "</span>";

    // click cards
    box.onclick = function() {
        // Don't allow clicking the same card twice
        if (this === firstCard || this.classList.contains('boxMatch')) return;

        this.classList.add('boxOpen');

        if (!firstCard) {
            firstCard = this;
        } else {
            secondCard = this;

            // check if they match
            if (firstCard.innerHTML === secondCard.innerHTML) {
                firstCard.classList.add('boxMatch');
                secondCard.classList.add('boxMatch');
            }

            // remove after a short time
            setTimeout(function() {
                if (!firstCard.classList.contains('boxMatch')) {
                    firstCard.classList.remove('boxOpen');
                }
                if (!secondCard.classList.contains('boxMatch')) {
                    secondCard.classList.remove('boxOpen');
                }
                firstCard = null;
                secondCard = null;

                // check for win
                if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                    clearInterval(timer);
                    alert('You win! Time: ' + time + ' seconds');
                }
            }, 700);
        }
    }

    // add the card to the game container
    document.querySelector('.game').appendChild(box);
}
