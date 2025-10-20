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
    box.innerHTML = shuf_emojis[i];

    // click cards
    box.onclick = function() {
        // Don't allow clicking the same card twice
        if (this === fristCard || this.classList.contains('boxMatch')) return;

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
                firstCard.classList.remove('boxOpen');
                secondCard.classList.remove('boxOpen');
                firstcard = null;
                secondCard = null;

                // check for win
                if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                    alert('You win!');
                }
            }, 500);
        }
    }

    // add the card to the game container
    document.querySelector('.game').appendChild(box);
}
