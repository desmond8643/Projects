selectTroops();

document.querySelector('.js-build-deck-button').addEventListener('click', () => {
    builtDecks.push({deckName: `Deck ${builtDecks.length + 1}`, troops: [...deck]});
    localStorage.setItem('built-decks', JSON.stringify(builtDecks));
    alert('Deck has been added!');
    console.log(builtDecks);
});

document.querySelector('.js-reset-deck-button').addEventListener('click', () => {
    deck = ['', '', '', '', '', '', '', '']; //reset deck, without using loop is faster
    updateDeck();
});

document.querySelector('.js-random-deck-button').addEventListener('click', () => {
    randomDeck = deckWithOneChampion(); 
    deck = []; //reset deck
    //push random troop into deck
    randomDeck.forEach((troop) => {
        deck.push(troop.name);
    });
    updateDeck();
});

function deckWithOneChampion () {
    let randomNumbers = Array(troops.length).fill().map((_, index) => index); //random generate numbers according to troop size
    randomNumbers.sort(() => Math.random() - 0.5); //random
    randomNumbers = randomNumbers.slice(0, 8); //slice array to size of 8

    let randomDeck = [];
    randomNumbers.forEach((number) => {
        randomDeck.push(troops[number]); //make an array of troop objects according to the random numbers
    });

    const countChampion = randomDeck.filter(troop => troop.rarity === 'champion').length; //find how many champions are there in the deck
    console.log(countChampion);
    if (countChampion > 1) {
        randomDeck = deckWithOneChampion(); //if it is larger than 1, do the procedure again until it's equal or less than 1
    }
    return randomDeck;
}

function updateDeck() {
    document.querySelectorAll('.js-deck-troop').forEach((deckTroop, index) => {
        if (deck[index] === '') {
            deckTroop.innerHTML = '';
            return;
        }
        troops.forEach((troop) => {
            if (troop.name === deck[index]) {
                deckTroop.innerHTML = `
                <img src="${troop.image}" class="troop-image">
                `;
            }
        });
    })
}

function checkDuplicateTroop(troopName) {
    deck.forEach((deckTroop) => {
        if (deckTroop === troopName) {
            console.log('same troop');
            return true;
        }
    });
}

function selectTroops() {
    document.querySelectorAll('.js-troop').forEach((troop) => {
        troop.addEventListener('click', () => {
            //unique identity 
            const troopName = troop.dataset.troop;
            //find the object from troops array, so other details can be used
            const findTroopObject = troops.find(obj => obj.name === troopName);
    
            if (deck.includes(troopName)) {
                alert(`${troopName} is in the deck already`)
            } else {
                let championInDeck = false;
                deck.forEach((slot) => {
                    if (!championInDeck && slot !== '') {
                        const troopRarity = troops.find(obj => obj.name === slot);
                        championInDeck = troopRarity.rarity === 'champion';
                    }
                });
                if (championInDeck && findTroopObject.rarity === 'champion') {
                    alert('Only 1 champion can be selected in a deck');
                } else {
                    let selected = false;
                    deck.forEach((slot, index) => {
                        if (selected) {
                            return;    
                        }
                        if (slot === '') {
                            deck[index] = troopName;
                            updateDeck();
                            selected = true;
                        }
                    });
                }
            }
        });
    });
}