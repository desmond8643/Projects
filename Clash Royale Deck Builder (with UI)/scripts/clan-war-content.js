renderDecks();
createDeck();

let clanWarDeck = [
[],[],[],[]
];

document.querySelectorAll('.js-add-clan-war-deck-button').forEach((button) => {
    button.addEventListener('click', () => {
        const builtDeckIndex = button.dataset.index;
        let hasDuplicate = false;
        builtDecks[builtDeckIndex].troops.forEach((troop) => {
            if (!hasDuplicate) {
                for (let i = 0; i < clanWarDeck.length; i++) {
                    for (let j = 0; j < clanWarDeck[i].length; j++) {
                        if (clanWarDeck[i][j] === troop) {
                            alert('There are repeated card in the clan war deck already');
                            hasDuplicate = true;
                            break;
                        }
                    }
                }
            }
        })
        
        if (!hasDuplicate) {
            let addDeck = false;
            clanWarDeck.forEach((deck, index) => {
                if (!addDeck) {
                    if (deck.length === 0) {
                        addDeck = true;
                        clanWarDeck[index] = [...builtDecks[builtDeckIndex].troops];
                        console.log(clanWarDeck[index]);
                        renderClanWarDecks();
                    }
                }
            })
        }
    });
});

document.querySelector('.js-reset-clan-war-deck-button').addEventListener('click', () => {
    clanWarDeck = [ 
    [],[],[],[]
    ];
    document.querySelectorAll('.js-deck-troop').forEach((deckTroop) => {
        deckTroop.innerHTML = '';
    });
});

document.querySelector('.js-random-clan-war-deck-button').addEventListener('click', () => {
    randomDecks = deckWithOneChampion();
    clanWarDeck = [ 
        [],[],[],[]
        ];
    randomDecks.forEach((deck, deckIndex) => {
        deck.forEach((troop) => {
            clanWarDeck[deckIndex].push(troop.name);
        });
    });
    console.log(clanWarDeck);     
    renderClanWarDecks();
});

document.querySelector('.js-auto-clan-war-deck-button').addEventListener('click', () => {
    let deckList = [];
    console.log(builtDecks);
    builtDecks.forEach((deckObject) => {
        let deck = [];
        deckObject.troops.forEach((troop) => {
            deck.push(troop);
        })
        deckList.push(deck);
    })
    console.log(deckList);

    // Get all possible combinations of 4 arrays from the 8 arrays
    const combinations = [];
    for (let i = 0; i < deckList.length - 3; i++) {
        for (let j = i + 1; j < deckList.length - 2; j++) {
            for (let k = j + 1; k < deckList.length - 1; k++) {
                for (let l = k + 1; l < deckList.length; l++) {
                    combinations.push([deckList[i], deckList[j], deckList[k], deckList[l]]);
                }
            }
        }
    }

    // Shuffle the combinations randomly
    const shuffledCombinations = combinations.sort(() => Math.random() - 0.5);

    // Find a valid combination with no repeated numbers
    let selectedCombination;
    for (let m = 0; m < shuffledCombinations.length; m++) {
        const concatenatedArray = [].concat(shuffledCombinations[m][0], shuffledCombinations[m][1], shuffledCombinations[m][2], shuffledCombinations[m][3]);
        const uniqueNumbers = new Set(concatenatedArray);
        if (uniqueNumbers.size === 32) {
            selectedCombination = shuffledCombinations[m];
            break;
        }
    }

    // Check if a valid combination was found
    if (selectedCombination) {
        clanWarDeck = selectedCombination;
        renderClanWarDecks();
    } else {
        alert('There are no valid combinations for 4 unique decks');
    }
});

function deckWithOneChampion () {
    let randomNumbers = Array(troops.length).fill().map((_, index) => index); //random generate numbers according to troop size
    randomNumbers.sort(() => Math.random() - 0.5); //random
    randomNumbers = randomNumbers.slice(0, 32); //slice array to size of 32

    let randomDecks = [[], [], [], []];
    randomNumbers.forEach((number, index) => {
        if (index < 8) {
            randomDecks[0].push(troops[number]);
        } else if (index > 7 && index < 16) {
            randomDecks[1].push(troops[number]);
        } else if (index > 15 && index < 24) {
            randomDecks[2].push(troops[number]);
        } else if (index > 23 && index < 32) {
            randomDecks[3].push(troops[number]);
        }
    });

    let countChampion = 0;
    randomDecks.forEach((deck) => {
        if (countChampion < 2) {
            countChampion = deck.filter(troop => troop.rarity === 'champion').length; //find how many champions are there in the deck
        }      
    })

    console.log(countChampion);
    if (countChampion > 1) {
        randomDecks = deckWithOneChampion(); //if it is larger than 1, do the procedure again until it's equal or less than 1
    }
    return randomDecks;
}

function renderClanWarDecks() {
    document.querySelectorAll('.js-deck-troop').forEach((deckTroop) => {
        const getDeckIndex = deckTroop.dataset.deck;
        const getSlotIndex = deckTroop.dataset.slot;
        troops.forEach((troop) => {
            if (troop.name === clanWarDeck[getDeckIndex][getSlotIndex]) {
                deckTroop.innerHTML = `
                <img src="${troop.image}" class="troop-image">
            `;
            }
        });
    });
}

function renderDecks() {
    let HTML = '';
    builtDecks.forEach((deck, index) => {
        HTML += `
        <div class="built-deck">
        <h2>${deck.deckName}</h2>
        <div class="image-container">
        `;
        deck.troops.forEach((troop) => {
            const getObject = troops.find(obj => obj.name === troop);
            HTML += `<img src="${getObject.image}" class="troop-image"></img>`;
        });
        HTML += `
        </div>
        <button class="js-add-clan-war-deck-button add-clan-war-deck-button" data-index="${index}">Add Deck</button>
        </div>
        `;
    });
    document.querySelector('.js-built-deck-list').innerHTML = HTML;
}

function createDeck() {
    let HTML = '';
    for (let i = 0; i < 4; i++) {
        HTML += `<div class="deck">`;
        for (let j = 0; j < 8; j++) {
            HTML += `
            <div class="deck-troop js-deck-troop" data-deck="${i}" data-slot="${j}">
            </div>
            `;
        }
        HTML += '</div>';
    }
    
    document.querySelector('.js-clan-war-deck').innerHTML = HTML;
}