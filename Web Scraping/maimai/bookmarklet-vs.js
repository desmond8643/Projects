//get player names
let getPlayer = document.getElementsByClassName("p_l_5 t_l f_l f_12 f_b");   
let playerName = [];   
for (let i = 0; i < getPlayer.length; i++) {     
    playerName.push(getPlayer[i].innerText);   
}   
console.log(playerName);

//get song names
let getSong = document.getElementsByClassName("music_name_block t_l f_13 break");   
let songName = [];   
for (let i = 0; i < getSong.length; i++) {     
    songName.push(getSong[i].innerText);   
}   
console.log(songName);

//get master score
let getMasScore = document.getElementsByClassName("p_r master_score_label w_120 f_b");

//get remaster score
let getRemasScore = document.getElementsByClassName("p_r remaster_score_label w_120 f_b");

const totalScore = masScore + remasScore;

//store player 1 and player 2 score
let player1Score = [];
let player2Score = [];
for (let i = 0; i < getMasScore.length; i++) {
    if (i % 2 === 0) {
        player1Score.push(getMasScore[i].innerText);
    } else {
        player2Score.push(getMasScore[i].innerText);
    }
}

for (let i = 0; i < getRemasScore.length; i++) {
    if (i % 2 === 0) {
        player1Score.push(getRemasScore[i].innerText);
    } else {
        player2Score.push(getRemasScore[i].innerText);
    }
}
//console.log(player1Score);

let player1Max = 0;
let player2Max = 0;

for (let i = 0; i < player1Score.length; i++) {
    if (parseFloat(player1Score[i]) >= 100.5) {
        player1Max += 1;
    }
}

for (let i = 0; i < player2Score.length; i++) {
    if (parseFloat(player2Score[i]) >= 100.5) {
        player2Max += 1;
    }
}

document.getElementsByClassName('see_through_block m_15 p_5 p_t_0')[0].innerHTML = `${playerName[0]} SSS+: ${player1Max}
${playerName[1]} SSS+: ${player2Max}`;

