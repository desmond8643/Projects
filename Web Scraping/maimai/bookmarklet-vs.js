//get player names
const getPlayer = document.getElementsByClassName("p_l_5 t_l f_l f_12 f_b");   
let playerName = [];   
for (let i = 0; i < getPlayer.length; i++) {     
    playerName.push(getPlayer[i].innerText);   
}   

//get song names
const getSong = document.getElementsByClassName("music_name_block t_l f_13 break");   
let songName = [];   
for (let i = 0; i < getSong.length; i++) {     
    songName.push(getSong[i].innerText);   
}   

//get master score
const getMasScore = document.getElementsByClassName("p_r master_score_label w_120 f_b");

//get remaster score
const getRemasScore = document.getElementsByClassName("p_r remaster_score_label w_120 f_b");

//store player 1 and player 2 score
let player1Score = [];
let player2Score = [];
getplayerScore(getMasScore);
getplayerScore(getRemasScore);

//Get player 1 and player 2 number of SSS+
const player1Max = getplayerMax(player1Score);
const player2Max = getplayerMax(player2Score);


//Show result in webpage
let playervsHTML = `<p>${playerName[0]} SSS+: ${player1Max}</p>`;
playervsHTML += `<p>${playerName[1]} SSS+: ${player2Max}</p>`;
const dashes = '<p>---------------------------------</p>';
document.getElementsByClassName('see_through_block m_15 p_5 p_t_0')[0].innerHTML = `${dashes}${playervsHTML}${dashes}`;
// `${playerName[0]} SSS+: ${player1Max}<br />${playerName[1]} SSS+: ${player2Max}`;

//Functions
function getplayerMax(playerScore) {
    let playerMax = 0;
    for (let i = 0; i < playerScore.length; i++) {
        if (parseFloat(playerScore[i]) >= 100.5) {
            playerMax += 1;
        }
    }
    return playerMax;
}

function getplayerScore(getScore) {
    for (let i = 0; i < getScore.length; i++) {
        if (i % 2 === 0) {
            player1Score.push(getScore[i].innerText);
        } else {
            player2Score.push(getScore[i].innerText);
        }
    }
}
