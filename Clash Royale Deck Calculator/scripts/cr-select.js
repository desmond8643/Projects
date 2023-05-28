const decks = [];

const troops = {
    troop1: document.getElementById("troop-select-1"),
    troop2: document.getElementById("troop-select-2"),
    troop3: document.getElementById("troop-select-3"),
    troop4: document.getElementById("troop-select-4"),
    troop5: document.getElementById("troop-select-5"),
    troop6: document.getElementById("troop-select-6"),
    troop7: document.getElementById("troop-select-7"),
    troop8: document.getElementById("troop-select-8"),
}

let slot = 1;
for (const troop in troops) {
    createSelect(troops[troop], slot);
    slot++;
}

const deck = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: ''
}

const champions = {
    1: 'Archer Queen', 
    2: 'Skeleton King', 
    3: 'Monk', 
    4: 'Golden Knight',
    5: 'Mighty Miner'
}


troops.troop1.addEventListener('change', () => {
    selectTroop(troops.troop1, 1)
});
troops.troop2.addEventListener('change', () => {
    selectTroop(troops.troop2, 2)
});
troops.troop3.addEventListener('change', () => {
    selectTroop(troops.troop3, 3)
});
troops.troop4.addEventListener('change', () => {
    selectTroop(troops.troop4, 4)
});
troops.troop5.addEventListener('change', () => {
    selectTroop(troops.troop5, 5)
});
troops.troop6.addEventListener('change', () => {
    selectTroop(troops.troop6, 6)
});
troops.troop7.addEventListener('change', () => {
    selectTroop(troops.troop7, 7)
});
troops.troop8.addEventListener('change', () => {
    selectTroop(troops.troop8, 8)
});


document.querySelector('.js-confirm-button').addEventListener('click', () => {

    const result = document.querySelector('.result')
    let score = 0;

    let HTML = '';
    for (const troop in troops) {
        const value = troops[troop].options[troops[troop].selectedIndex].value;
        const findTroop = troopInfo.find(findTroop => findTroop.name === value);
        if (typeof findTroop !== 'undefined') {
            const level = findTroop.level;
            HTML += `${value} | Level: ${level},<br>`; 
            score += Number(level);
        }
        
    }
    
    result.innerHTML = `The deck you selected is: <br>` + HTML + `Score: ${score}, Average Level: ${score / 8}`;

});

function selectTroop(troop, slot) {
    const selectedTroop = troop.options[troop.selectedIndex];
    deck[slot] = selectedTroop.value;
    console.log(deck);

    for (const troopInTroops in troops) {
        if (troopInTroops === troop) {
            continue;
        }
        disableTroops(troops[troopInTroops], selectedTroop);
    } 
}

function disableTroops(troop, selectedTroop) {
    /*
    const championsLabel = troop.querySelector('optgroup[label="Champion"]');
    const championsToLoop = championsLabel.querySelectorAll('option'); */

    for (let i = 0; i < troop.options.length; i++) {
        if (troop.options[i].value === selectedTroop.value || Object.values(deck).includes(troop.options[i].value)) {
            troop.options[i].disabled = true;
        } else {
            troop.options[i].disabled = false;
        }
    }

    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 5; j++) {
            if (deck[i] === champions[j] && troop.options[troop.selectedIndex].value !== champions[j]) {
                disableChampions(troop);
            }
        }
    }

}

function disableChampions(troop) {
    const championsLabel = troop.querySelector('optgroup[label="Champion"]');
    const championsToLoop = championsLabel.querySelectorAll('option');

    for (let i = 0; i < championsToLoop.length; i++) {
        championsToLoop[i].disabled = true;      
    }
}

function createSelect(troop, slot) {
    troop.innerHTML = `
    <option value="">--Troop ${slot}--</option>
    <optgroup label="Common">
        <option value="Barbarian">Barbarian</option>
        <option value="Archers">Archers</option>
        <option value="Bomber">Bomber</option>
        <option value="Minions">Minions</option>
        <option value="Minion Horde">Minion Horde</option>
        <option value="Zap">Zap</option>
        <option value="Knight">Knight</option>
        <option value="Goblins">Goblins</option>
        <option value="Spear Goblins">Spear Goblins</option>
        <option value="Goblin Gang">Goblin Gang</option>
        <option value="Skeletons">Skeletons</option>
        <option value="Skeleton Barrel">Skeleton Barrel</option>
        <option value="Fire Spirit">Fire Spirit</option>
        <option value="Electro Spirit">Electro Spirit</option>
        <option value="Ice Spirit">Ice Spirit</option>
        <option value="Arrow">Arrow</option>
        <option value="Royal Giant">Royal Giant</option>
        <option value="Bats">Bats</option>
        <option value="Mortor">Mortor</option>
        <option value="Skeleton Dragons">Skeleton Dragons</option>
        <option value="Cannon">Cannon</option>
        <option value="Elite Barbarian">Elite Barbarian</option>
        <option value="Tesla">Tesla</option>
        <option value="Royal Recruit">Royal Recruit</option>
        <option value="Snowball">Snowball</option>
        <option value="Rascals">Rascals</option>
        <option value="Firecracker">Firecracker</option>
        <option value="Royal Delivery">Royal Delivery</option>
    </optgroup>
    <optgroup label="Rare">
        <option value="Giant">Giant</option>
        <option value="Hogrider">Hogrider</option>
        <option value="Battle Ram">Battle Ram</option>
        <option value="Furnace">Furnace</option>
        <option value="Fireball">Fireball</option>
        <option value="Dart Goblin">Dart Goblin</option>
        <option value="Heal Spirit">Heal Spirit</option>
        <option value="Rocket">Rocket</option>
        <option value="Mega Minion">Mega Minion</option>
        <option value="Inferno Tower">Inferno Tower</option>
        <option value="Musketeer">Musketeer</option>
        <option value="3 Musketeers">3 Musketeers</option>
        <option value="Ice Golem">Ice Golem</option>
        <option value="Valkyrie">Valkyrie</option>
        <option value="Tombstone">Tombstone</option>
        <option value="Elixir Collector">Elixir Collector</option>
        <option value="Goblin Hut">Goblin Hut</option>
        <option value="Barbarian Hut">Barbarian Hut</option>
        <option value="Wizard">Wizard</option>
        <option value="Bomb Tower">Bomb Tower</option>
        <option value="Flying Machine">Fly Machine</option>
        <option value="Royal Hogs">Royal Hogs</option>
        <option value="Zappies">Zappies</option>
        <option value="Elixir Golem">Elixir Golem</option>
        <option value="Battle Healer">Battle Healer</option>
    </optgroup>
    <optgroup label="Epic">
        <option value="Prince">Prince</option>
        <option value="Electro Dragon">Eletro Dragon</option>
        <option value="Balloon">Balloon</option>
        <option value="Tornado">Tornado</option>
        <option value="Freeze">Freeze</option>
        <option value="Bowler">Bowler</option>
        <option value="Barbarian Barrel">Barbarian Barrel</option>
        <option value="Wallbreakers">Wallbreakers</option>
        <option value="Dark Prince">Dark Prince</option>
        <option value="Rage">Rage</option>
        <option value="Mirror">Mirror</option>
        <option value="Electro Giant">Eletro Giant</option>
        <option value="Goblin Giant">Goblin Giant</option>
        <option value="Poison">Poison</option>
        <option value="Baby Dragon">Baby Dragon</option>
        <option value="Goblin Barrel">Goblin Barrel</option>
        <option value="Witch">Witch</option>
        <option value="Skeleton Army">Skeleton Army</option>
        <option value="Pekka">Pekka</option>
        <option value="Guards">Guards</option>
        <option value="Lightning">Lightning</option>
        <option value="Clone">Clone</option>
        <option value="Goblin Drill">Goblin Drill</option>
        <option value="Giant Skeleton">Giant Skeleton</option>
        <option value="Cannon Cart">Cannon Cart</option>
        <option value="X-bow">X-bow</option>
        <option value="Golem">Golem</option>
        <option value="Hunter">Hunter</option>

    </optgroup>
    <optgroup label="Legendary">
        <option value="Princess">Princess</option>
        <option value="Lumberjack">Lumberjack</option>
        <option value="Inferno Dragon">Inferno Dragon</option>
        <option value="Ramrider">Ramrider</option>
        <option value="The Log">The Log</option>
        <option value="Lavahound">Lavahound</option>
        <option value="Miner">Miner</option>
        <option value="Electro Wizard">Eletro Wizard</option>
        <option value="Ice Wizard">Ice Wizard</option>
        <option value="Mega Knight">Mega Knight</option>
        <option value="Phoenix">Phoenix</option>
        <option value="Night Witch">Night Witch</option>
        <option value="Mother Witch">Mother Witch</option>
        <option value="Royal Ghost">Royal Ghost</option>
        <option value="Graveyard">Graveyard</option>
        <option value="Sparky">Sparky</option>
        <option value="Bandit">Bandit</option>
        <option value="Fisherman">Fisherman</option>
        <option value="Magic Archer">Magic Archer</option>
    </optgroup>
    <optgroup label="Champion">
        <option value="Archer Queen">Archer Queen</option>
        <option value="Skeleton King">Skeleton King</option>
        <option value="Monk">Monk</option>
        <option value="Golden Knight">Golden Knight</option>
        <option value="Mighty Miner">Mighty Miner</option>
    </optgroup>
`;

}
