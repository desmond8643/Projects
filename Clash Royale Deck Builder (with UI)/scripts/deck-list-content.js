renderDecks();

function renderDecks() {
    let HTML = '';
    builtDecks.forEach((deck, index) => {
        HTML += `
        <div class="built-deck">
        <p class="js-delete-deck-button delete-deck-button">X</p>
        <h2>${deck.deckName}</h2>
        <div class="image-container">
        `;
        deck.troops.forEach((troop) => {
            const getObject = troops.find(obj => obj.name === troop);
            HTML += `<img src="${getObject.image}" class="troop-image"></img>`;
        });
        HTML += `
        </div>
        </div>
        `;
    });
    
    document.querySelector('.js-built-deck-list').innerHTML = HTML;
    
    document.querySelectorAll('.js-delete-deck-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            builtDecks.splice(index, 1);
            localStorage.setItem('built-decks', JSON.stringify(builtDecks));
            renderDecks();
        });
    });

    const numberOfDeck = builtDecks.length;
    document.querySelector('.js-number-of-deck').innerHTML = numberOfDeck;
}