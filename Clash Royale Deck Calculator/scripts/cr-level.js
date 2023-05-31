let troopInfo = JSON.parse(localStorage.getItem('troop-level')) || [
{name: 'Knight', id: 'knight-level', level: ''},
{name: 'Archers', id: 'archers-level', level: ''},
{name: 'Giant', id: 'giant-level', level: ''},
{name: 'Bomber', id: 'bomber-level', level: ''},
{name: 'Minions', id: 'minions-level', level: ''},
{name: 'Barbarian', id: 'barbarian-level', level: ''},
{name: 'Zap', id: 'zap-level', level: ''},
{name: 'Goblins', id: 'goblins-level', level: ''},
{name: 'Spear Goblins', id: 'spear-goblins-level', level: ''},
{name: 'Minion Horde', id: 'minion-horde-level', level: ''},
{name: 'Goblin Gang', id: 'goblin-gang-level', level: ''},
{name: 'Skeletons', id: 'skeletons-level', level: ''},
{name: 'Skeleton Barrel', id: 'skeleton-barrel-level', level: ''},
{name: 'Fire Spirit', id: 'fire-spirit-level', level: ''},
{name: 'Electro Spirit', id: 'electro-spirit-level', level: ''},
{name: 'Ice Spirit', id: 'ice-spirit-level', level: ''},
{name: 'Arrow', id: 'arrow-level', level: ''},
{name: 'Royal Giant', id: 'royal-giant-level', level: ''},
{name: 'Bats', id: 'bats-level', level: ''},
{name: 'Mortor', id: 'mortor-level', level: ''},
{name: 'Skeleton Dragons', id: 'skeleton-dragons-level', level: ''},
{name: 'Cannon', id: 'cannon-level', level: ''},
{name: 'Elite Barbarian', id: 'elite-barbarian-level', level: ''},
{name: 'Tesla', id: 'tesla-level', level: ''},
{name: 'Royal Recruit', id: 'royal-recruit-level', level: ''},
{name: 'Snowball', id: 'snowball-level', level: ''},
{name: 'Rascals', id: 'rascals-level', level: ''},
{name: 'Firecracker', id: 'firecracker-level', level: ''},
{name: 'Royal Delivery', id: 'royal-delivery-level', level: ''},
{name: 'Hogrider', id: 'hogrider-level', level: ''},
{name: 'Battle Ram', id: 'battle-ram-level', level: ''},
{name: 'Furance', id: 'furnace-level', level: ''},
{name: 'Fireball', id: 'fireball-level', level: ''},
{name: 'Dart Goblin', id: 'dart-goblin-level', level: ''},
{name: 'Heal Spirit', id: 'heal-spirit-level', level: ''},
{name: 'Rocket', id: 'rocket-level', level: ''},
{name: 'Mega Minion', id: 'mega-minion-level', level: ''},
{name: 'Inferno Tower', id: 'inferno-tower-level', level: ''},
{name: 'Musketeer', id: 'musketeer-level', level: ''},
{name: '3 Musketeers', id: '3-musketeers-level', level: ''},
{name: 'Ice Golem', id: 'ice-golem-level', level: ''},
{name: 'Valkyrie', id: 'valkyrie-level', level: ''},
{name: 'Tombstone', id: 'tombstone-level', level: ''},
{name: 'Elixir Collector', id: 'elixir-collector-level', level: ''},
{name: 'Goblin Hut', id: 'goblin-hut-level', level: ''},
{name: 'Barbarian Hut', id: 'barbarian-hut-level', level: ''},
{name: 'Wizard', id: 'wizard-level', level: ''},
{name: 'Bomb Tower', id: 'bomb-tower-level', level: ''},
{name: 'Flying Machine', id: 'flying-machine-level', level: ''},
{name: 'Royal Hogs', id: 'royal-hogs-level', level: ''},
{name: 'Zappies', id: 'zappies-level', level: ''},
{name: 'Elixir Golem', id: 'elixir-golem-level', level: ''},
{name: 'Battle Healer', id: 'battle-healer-level', level: ''},
{name: 'Earthquake', id: 'earth-quake-level', level: ''},
{name: 'Prince', id: 'prince-level', level: ''},
{name: 'Electro Dragon', id: 'electro-dragon-level', level: ''},
{name: 'Balloon', id: 'balloon-level', level: ''},
{name: 'Tornado', id: 'tornado-level', level: ''},
{name: 'Freeze', id: 'freeze-level', level: ''},
{name: 'Bowler', id: 'bowler-level', level: ''},
{name: 'Barbarian Barrel', id: 'barbarian-barrel-level', level: ''},
{name: 'Wallbreakers', id: 'wallbreakers-level', level: ''},
{name: 'Dark Prince', id: 'dark-prince-level', level: ''},
{name: 'Rage', id: 'rage-level', level: ''},
{name: 'Mirror', id: 'mirror-level', level: ''},
{name: 'Electro Giant', id: 'electro-giant-level', level: ''},
{name: 'Goblin Giant', id: 'goblin-giant-level', level: ''},
{name: 'Poison', id: 'poison-level', level: ''},
{name: 'Baby Dragon', id: 'baby-dragon-level', level: ''},
{name: 'Goblin Barrel', id: 'goblin-barrel-level', level: ''},
{name: 'Witch', id: 'witch-level', level: ''},
{name: 'Skeleton Army', id: 'skeleton-army-level', level: ''},
{name: 'Pekka', id: 'pekka-level', level: ''},
{name: 'Guards', id: 'guards-level', level: ''},
{name: 'Lightning', id: 'lightning-level', level: ''},
{name: 'Clone', id: 'clone-level', level: ''},
{name: 'Goblin Drill', id: 'goblin-drill-level', level: ''},
{name: 'Giant Skeleton', id: 'giant-skeleton-level', level: ''},
{name: 'Cannon Cart', id: 'cannon-cart-level', level: ''},
{name: 'X-bow', id: 'x-bow-level', level: ''},
{name: 'Golem', id: 'golem-level', level: ''},
{name: 'Hunter', id: 'hunter-level', level: ''},
{name: 'Princess', id: 'princess-level', level: ''},
{name: 'Lumberjack', id: 'lumberjack-level', level: ''},
{name: 'Inferno Dragon', id: 'inferno-dragon-level', level: ''},
{name: 'Ramrider', id: 'ramrider-level', level: ''},
{name: 'The Log', id: 'the-log-level', level: ''},
{name: 'Lavahound', id: 'lavahound-level', level: ''},
{name: 'Miner', id: 'miner-level', level: ''},
{name: 'Electro Wizard', id: 'electro-wizard-level', level: ''},
{name: 'Ice Wizard', id: 'ice-wizard-level', level: ''},
{name: 'Mega Knight', id: 'mega-knight-level', level: ''},
{name: 'Phoenix', id: 'phoenix-level', level: ''},
{name: 'Night Witch', id: 'night-witch-level', level: ''},
{name: 'Mother Witch', id: 'mother-witch-level', level: ''},
{name: 'Royal Ghost', id: 'royal-ghost-level', level: ''},
{name: 'Graveyard', id: 'graveyard-level', level: ''},
{name: 'Sparky', id: 'sparky-level', level: ''},
{name: 'Bandit', id: 'bandit-level', level: ''},
{name: 'Fisherman', id: 'fisherman-level', level: ''},
{name: 'Magic Archer', id: 'magic-archer-level', level: ''},
{name: 'Archer Queen', id: 'archer-queen-level', level: ''},
{name: 'Skeleton King', id: 'skeleton-king-level', level: ''},
{name: 'Monk', id: 'monk-level', level: ''},
{name: 'Golden Knight', id: 'golden-knight-level', level: ''},
{name: 'Mighty Miner', id: 'mighty-miner-level', level: ''},
]; 

/*A button to reset troop list without editing my code, e.g. delete "OR statement",
In final code, the "OR statement" for troopinfo is needed for initializing the list for the first time
So this button will be deleted or redesigned after I add all the troops and update the json*/
document.getElementById("js-update-troop-list").addEventListener('click', () => {
    troopInfo = [
        {name: 'Knight', id: 'knight-level', level: ''},
        {name: 'Archers', id: 'archers-level', level: ''},
        {name: 'Giant', id: 'giant-level', level: ''},
        {name: 'Bomber', id: 'bomber-level', level: ''},
        {name: 'Minions', id: 'minions-level', level: ''},
        {name: 'Barbarian', id: 'barbarian-level', level: ''},
        {name: 'Zap', id: 'zap-level', level: ''},
        {name: 'Goblins', id: 'goblins-level', level: ''},
        {name: 'Spear Goblins', id: 'spear-goblins-level', level: ''},
        {name: 'Minion Horde', id: 'minion-horde-level', level: ''},
        {name: 'Goblin Gang', id: 'goblin-gang-level', level: ''},
        {name: 'Skeletons', id: 'skeletons-level', level: ''},
        {name: 'Skeleton Barrel', id: 'skeleton-barrel-level', level: ''},
        {name: 'Fire Spirit', id: 'fire-spirit-level', level: ''},
        {name: 'Electro Spirit', id: 'electro-spirit-level', level: ''},
        {name: 'Ice Spirit', id: 'ice-spirit-level', level: ''},
        {name: 'Arrow', id: 'arrow-level', level: ''},
        {name: 'Royal Giant', id: 'royal-giant-level', level: ''},
        {name: 'Bats', id: 'bats-level', level: ''},
        {name: 'Mortor', id: 'mortor-level', level: ''},
        {name: 'Skeleton Dragons', id: 'skeleton-dragons-level', level: ''},
        {name: 'Cannon', id: 'cannon-level', level: ''},
        {name: 'Elite Barbarian', id: 'elite-barbarian-level', level: ''},
        {name: 'Tesla', id: 'tesla-level', level: ''},
        {name: 'Royal Recruit', id: 'royal-recruit-level', level: ''},
        {name: 'Snowball', id: 'snowball-level', level: ''},
        {name: 'Rascals', id: 'rascals-level', level: ''},
        {name: 'Firecracker', id: 'firecracker-level', level: ''},
        {name: 'Royal Delivery', id: 'royal-delivery-level', level: ''},
        {name: 'Hogrider', id: 'hogrider-level', level: ''},
        {name: 'Battle Ram', id: 'battle-ram-level', level: ''},
        {name: 'Furance', id: 'furnace-level', level: ''},
        {name: 'Fireball', id: 'fireball-level', level: ''},
        {name: 'Dart Goblin', id: 'dart-goblin-level', level: ''},
        {name: 'Heal Spirit', id: 'heal-spirit-level', level: ''},
        {name: 'Rocket', id: 'rocket-level', level: ''},
        {name: 'Mega Minion', id: 'mega-minion-level', level: ''},
        {name: 'Inferno Tower', id: 'inferno-tower-level', level: ''},
        {name: 'Musketeer', id: 'musketeer-level', level: ''},
        {name: '3 Musketeers', id: '3-musketeers-level', level: ''},
        {name: 'Ice Golem', id: 'ice-golem-level', level: ''},
        {name: 'Valkyrie', id: 'valkyrie-level', level: ''},
        {name: 'Tombstone', id: 'tombstone-level', level: ''},
        {name: 'Elixir Collector', id: 'elixir-collector-level', level: ''},
        {name: 'Goblin Hut', id: 'goblin-hut-level', level: ''},
        {name: 'Barbarian Hut', id: 'barbarian-hut-level', level: ''},
        {name: 'Wizard', id: 'wizard-level', level: ''},
        {name: 'Bomb Tower', id: 'bomb-tower-level', level: ''},
        {name: 'Flying Machine', id: 'flying-machine-level', level: ''},
        {name: 'Royal Hogs', id: 'royal-hogs-level', level: ''},
        {name: 'Zappies', id: 'zappies-level', level: ''},
        {name: 'Elixir Golem', id: 'elixir-golem-level', level: ''},
        {name: 'Battle Healer', id: 'battle-healer-level', level: ''},
        {name: 'Earthquake', id: 'earth-quake-level', level: ''},
        {name: 'Prince', id: 'prince-level', level: ''},
        {name: 'Electro Dragon', id: 'electro-dragon-level', level: ''},
        {name: 'Balloon', id: 'balloon-level', level: ''},
        {name: 'Tornado', id: 'tornado-level', level: ''},
        {name: 'Freeze', id: 'freeze-level', level: ''},
        {name: 'Bowler', id: 'bowler-level', level: ''},
        {name: 'Barbarian Barrel', id: 'barbarian-barrel-level', level: ''},
        {name: 'Wallbreakers', id: 'wallbreakers-level', level: ''},
        {name: 'Dark Prince', id: 'dark-prince-level', level: ''},
        {name: 'Rage', id: 'rage-level', level: ''},
        {name: 'Mirror', id: 'mirror-level', level: ''},
        {name: 'Electro Giant', id: 'electro-giant-level', level: ''},
        {name: 'Goblin Giant', id: 'goblin-giant-level', level: ''},
        {name: 'Poison', id: 'poison-level', level: ''},
        {name: 'Baby Dragon', id: 'baby-dragon-level', level: ''},
        {name: 'Goblin Barrel', id: 'goblin-barrel-level', level: ''},
        {name: 'Witch', id: 'witch-level', level: ''},
        {name: 'Skeleton Army', id: 'skeleton-army-level', level: ''},
        {name: 'Pekka', id: 'pekka-level', level: ''},
        {name: 'Guards', id: 'guards-level', level: ''},
        {name: 'Lightning', id: 'lightning-level', level: ''},
        {name: 'Clone', id: 'clone-level', level: ''},
        {name: 'Goblin Drill', id: 'goblin-drill-level', level: ''},
        {name: 'Giant Skeleton', id: 'giant-skeleton-level', level: ''},
        {name: 'Cannon Cart', id: 'cannon-cart-level', level: ''},
        {name: 'X-bow', id: 'x-bow-level', level: ''},
        {name: 'Golem', id: 'golem-level', level: ''},
        {name: 'Hunter', id: 'hunter-level', level: ''},
        {name: 'Princess', id: 'princess-level', level: ''},
        {name: 'Lumberjack', id: 'lumberjack-level', level: ''},
        {name: 'Inferno Dragon', id: 'inferno-dragon-level', level: ''},
        {name: 'Ramrider', id: 'ramrider-level', level: ''},
        {name: 'The Log', id: 'the-log-level', level: ''},
        {name: 'Lavahound', id: 'lavahound-level', level: ''},
        {name: 'Miner', id: 'miner-level', level: ''},
        {name: 'Electro Wizard', id: 'electro-wizard-level', level: ''},
        {name: 'Ice Wizard', id: 'ice-wizard-level', level: ''},
        {name: 'Mega Knight', id: 'mega-knight-level', level: ''},
        {name: 'Phoenix', id: 'phoenix-level', level: ''},
        {name: 'Night Witch', id: 'night-witch-level', level: ''},
        {name: 'Mother Witch', id: 'mother-witch-level', level: ''},
        {name: 'Royal Ghost', id: 'royal-ghost-level', level: ''},
        {name: 'Graveyard', id: 'graveyard-level', level: ''},
        {name: 'Sparky', id: 'sparky-level', level: ''},
        {name: 'Bandit', id: 'bandit-level', level: ''},
        {name: 'Fisherman', id: 'fisherman-level', level: ''},
        {name: 'Magic Archer', id: 'magic-archer-level', level: ''},
        {name: 'Archer Queen', id: 'archer-queen-level', level: ''},
        {name: 'Skeleton King', id: 'skeleton-king-level', level: ''},
        {name: 'Monk', id: 'monk-level', level: ''},
        {name: 'Golden Knight', id: 'golden-knight-level', level: ''},
        {name: 'Mighty Miner', id: 'mighty-miner-level', level: ''},
    ];
    createTroopList();
    createSelectLevel();
    for (const troop in troopInfo) {
        updateInfo(troopInfo[troop].id, troopInfo[troop]);
    }
});

createTroopList();
/*Create Troop List (Once run once)*/
function createTroopList(){
    const troopList = document.getElementById('js-troop-level');
    let HTML = ''
    for (const troop in troopInfo) {
        const name = troopInfo[troop].name;
        const id = troopInfo[troop].id;
        const level = troopInfo[troop].level;
        //troopList.innerHTML += 
        HTML += `
        <div class="troop-list">
        <p id="js-${name}-content">${name} | Level: ${level}</p>
        <p class="change-level">Change level => <select id="${id}" class="js-select-level" data-name="${name}"></select></p>
        </div>
        `
    }
    troopList.innerHTML = HTML;
}
/* */

// create select with options of level (only run once)
createSelectLevel();
function createSelectLevel() {
    const selectLevel = document.getElementsByClassName('js-select-level');
    for (const troopLevel in selectLevel) {
        selectLevel[troopLevel].innerHTML = `
        <option value="">--Select Level--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        `;
    }   
}

//show current level in select
showCurrentLevel();
function showCurrentLevel() {
    document.querySelectorAll('.js-select-level').forEach((select) => {
        const name = select.dataset.name;
        let level;
        troopInfo.forEach((troop) => {
            if (troop.name === name) {
                level = troop.level;
            }
        });
        select.selectedIndex = level;
    });
}

// run the Event listeners (troops are fixed and will not added in the UI)
for (const troop in troopInfo) {
    updateInfo(troopInfo[troop].id, troopInfo[troop]);
}

function updateInfo(id, troop) {
    document.getElementById(id).addEventListener('change', () => {
        //get selectedIndex in element id
        const getId = document.getElementById(id);
        const index = getId.options[getId.selectedIndex];
        
        troop.level = index.value; //change troop level

        //change content in unique class created when the page starts
        const name = troop.name;
        const content = document.getElementById(`js-${name}-content`);
        content.innerHTML = `${name} | Level: ${troop.level}`; 
        
        localStorage.setItem('troop-level', JSON.stringify(troopInfo)); //store locally, so content will be saved when revisit
    });
}




