//try to make a list that can store the decks that I made using the selects
let deckList= [];


document.querySelector(".js-add-deck-button").addEventListener('click', () => {
    let currentDeck = [];
    const result = document.querySelector('.result');
    let HTML = '<p>Deck List</p>';
    let score = 0;

    for (const troop in troops) {
        const value = troops[troop].options[troops[troop].selectedIndex].value;
        currentDeck.push(value);
        const findTroop = troopInfo.find(findTroop => findTroop.name === value);
        if (typeof findTroop !== 'undefined') {
            const level = findTroop.level; 
            score += Number(level);
        }   
    }  
    currentDeck.push(score);
    deckList.push(currentDeck);
    console.log(deckList);
    
    for (let i = 0; i < deckList.length; i++) {
        HTML += '<p>';
        for (let j = 0; j < deckList[i].length - 1; j++) {
            const troop = deckList[i][j];
            HTML += troop === '' ? 'None, ' : `${troop}, `;
        }
        HTML += `<button class="js-delete-deck-button">Delete deck</button>Score: ${deckList[i][8]}</p>`;
    }

    result.innerHTML = HTML;
    
    //declare eventlistener for deleting deck after creating the list
    deleteDeck();
});

function deleteDeck() {
    document.querySelectorAll('.js-delete-deck-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            deckList.splice(index, 1);
    
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
            deleteDeck();
        });
    })
}




