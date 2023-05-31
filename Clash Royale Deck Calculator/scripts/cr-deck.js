//try to make a list that can store the decks that I made using the selects
let deckList= JSON.parse(localStorage.getItem('deck-list')) || [];
console.log(deckList);

document.querySelector('.js-show-deck-button').addEventListener('click',  () => {
    showDeck();
    deleteDeck();
})

document.querySelector(".js-add-deck-button").addEventListener('click', () => {
    let currentDeck = [];
    let deckScore = 0;

    troops.forEach((troopSelectId) => {
        const troopSelect = troopSelectId.troopSelect;
        const troopName = troopSelect.options[troopSelect.selectedIndex].value;
        const findTroop = troopInfo.find(findTroop => findTroop.name === troopName);

        currentDeck.push(troopName);

        if (typeof findTroop !== 'undefined') {
            const level = findTroop.level;
            deckScore += Number(level);
        }
    })
    
    currentDeck.push(deckScore);
    deckList.push(currentDeck);
    console.log(deckList);
    
    showDeck();
    
    //declare eventlistener for deleting deck after creating the list
    deleteDeck();
    localStorage.setItem('deck-list', JSON.stringify(deckList));
});

//Functions

function deleteDeck() {
    document.querySelectorAll('.js-delete-deck-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            deckList.splice(index, 1);
    
            showDeck();
            deleteDeck();
            localStorage.setItem('deck-list', JSON.stringify(deckList));
        });
    })
}

function showDeck() {
    const result = document.querySelector('.result');
    let HTML = '<p>Deck List</p>';
    
    for (let i = 0; i < deckList.length; i++) {
        HTML += '<p>';
        for (let j = 0; j < deckList[i].length - 1; j++) {
            const troop = deckList[i][j];
            HTML += troop === '' ? 'None, ' : `${troop}, `;
        }
        HTML += `<button class="js-delete-deck-button">Delete deck</button>Score: ${deckList[i][8]}</p>`;
    }

    result.innerHTML = HTML === '<p>Deck List</p>' ? HTML + '<p>Please build a deck~</p>': HTML;
}

