let allTroops = 'general';
//HTML of grids for building deck
createDeck();
//HTML of All Troops below for selecting 
troopList();

//click on troops on deck to remove them from the deck
document.querySelectorAll('.js-deck-troop').forEach((deckTroop, index) => {
    deckTroop.addEventListener('click', () => {
        if (deck[index] !== '') {
            deck[index] = '';
            updateDeck();
        }
    });
})

document.querySelector('.js-sort-troops-button').addEventListener('click', () => {
    if (allTroops === 'general') {
        troopListRarity();
    } else {
        document.querySelector('.js-sort-troops-button').innerHTML = 'General';
        document.querySelector('.all-troops-rarity').innerHTML = '';
        troopList();
        selectTroops();
    }

});

function generateTroopImage(array) {
    let HTML = '';
    array.forEach((troop) => { 
        HTML += `
        <div class="troop-grid js-troop" data-troop="${troop.name}">
        <img src="${troop.image}" class="troop-image">
        </div>`;;
    });
    return HTML;
}

function troopList() {
    allTroops = 'general';
    const HTML = generateTroopImage(troops);
    document.querySelector('.all-troops').innerHTML = HTML;
    selectTroops();
}

function troopListRarity() {
    allTroops = 'rarity';
    document.querySelector('.js-sort-troops-button').innerHTML = 'Rarity';
    let common = [], rare = [], epic = [], legendary = [], champion = [];
    troops.forEach((troop) => {
        switch(troop.rarity) {
            case 'common':
                common.push(troop);
                break;
            case 'rare':
                rare.push(troop);
                break;
            case 'epic':
                epic.push(troop);
                break
            case 'legendary':
                legendary.push(troop);
                break;
            case 'champion':
                champion.push(troop);
                break;
        }
    });
    
    let HTML = '';
    HTML = `<h2>Common</h2>
    <div class="troops-rarity">
    ${generateTroopImage(common)}
    </div>
    <h2>Rare</h2>
    <div class="troops-rarity">
    ${generateTroopImage(rare)}
    </div>
    <h2>Epic</h2>
    <div class="troops-rarity">
    ${generateTroopImage(epic)}
    </div>
    <h2>Legendary</h2>
    <div class="troops-rarity">
    ${generateTroopImage(legendary)}
    </div>
    <h2>Champion</h2>
    <div class="troops-rarity">
    ${generateTroopImage(champion)}
    </div>
    `;

    document.querySelector('.all-troops').innerHTML = '';
    document.querySelector('.all-troops-rarity').innerHTML = HTML;

    selectTroops();
}

function createDeck() {
    let HTML = '';
    for (let i = 0; i < 8; i++) {
        HTML += `
        <div class="deck-troop js-deck-troop" data-slot="${i}">
        </div>
        `;
    }
    document.querySelector('.deck').innerHTML = HTML;
}


