const troopInfo = JSON.parse(localStorage.getItem('troop-level')) || [
    {name: 'Knight', id: 'knight-level', level: ''},
    {name: 'Archers', id: 'archers-level', level: ''},
    {name: 'Giant', id: 'giant-level', level: ''},
    {name: 'Bomber', id: 'bomber-level', level: ''},
    {name: 'Minions', id: 'minions-level', level: ''},
    {name: 'Barbarian', id: 'barbarian-level', level: ''},
    {name: 'Zap', id: 'zap-level', level: ''},
    {name: 'Goblins', id: 'goblin-level', level: ''}
];

createTroopList();
/*Create Troop List (Once run once)*/
function createTroopList(){
    const troopList = document.getElementById('js-troop-level');
    //let HTML = ''
    for (const troop in troopInfo) {
        const name = troopInfo[troop].name;
        const id = troopInfo[troop].id;
        const level = troopInfo[troop].level;
        troopList.innerHTML += `
        <div class="troop-list">
        <p id="js-${name}-content">${name} | Level: ${level}</p>
        <p class="change-level">Change level => <select id="${id}" class="js-select-level"></select></p>
        </div>
        `
    }
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

function setSelected() {

}



