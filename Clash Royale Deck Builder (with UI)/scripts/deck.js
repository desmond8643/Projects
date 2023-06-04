//array for creating decks
let deck = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
];

//array for built decks
let builtDecks = JSON.parse(localStorage.getItem('built-decks')) || [];