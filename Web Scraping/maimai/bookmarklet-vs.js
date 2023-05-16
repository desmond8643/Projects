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
let masScore = [];
for (let i = 0; i < getMasScore.length; i++) {
    masScore.push(getMasScore[i].innerText);
}
console.log(masScore);

//get remaster score
let getRemasScore = document.getElementsByClassName("p_r remaster_score_label w_120 f_b");
let remasScore = [];
for (let i = 0; i < getRemasScore.length; i++) {
    remasScore.push(getRemasScore[i].innerText);
}
console.log(remasScore);
